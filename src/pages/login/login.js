import Handlebars from 'handlebars'

import tmpl from './login.hbs'
import { field } from '../../components/field/field'
import { button } from '../../components/button/button'
import './login.scss';

const data = {
    fields: [
        {label: "Логин", type: 'text',  name: 'login'},
        {label: "Пароль", type: 'password', name: 'password'}
    ],
    buttons: [
        {type: 'submit', text: 'Войти', form: 'login'},
        {type: 'button', text: 'Нет аккаунта?', form: 'login'}
    ]
}

export const login = () => {
    const partialNamesFields = data.fields.map((el) => {
        Handlebars.registerPartial(el.name, field(el))
        return el.name
    })

    const partialNamesButtons = data.buttons.map((el) => {
        Handlebars.registerPartial(el.text, button(el))
        return el.text
    })

    Handlebars.registerPartial('submitButton', button({type: 'submit', text: 'Войти', form: 'login'}))

    return tmpl({fieldsNames: partialNamesFields, buttonsNames: partialNamesButtons})
}