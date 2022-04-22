import Handlebars from 'handlebars'

import tmpl from './login.hbs'
import {authorizationForm} from "../../../components/authorizationForm/authorizationForm"
import './login.scss'

const data = {
    formName: 'loginForm',
    title: 'Вход',
    fields: [
        {label: "Логин", type: 'text',  name: 'login'},
        {label: "Пароль", type: 'password', name: 'password'}
    ],
    buttons: [
        {type: 'submit', text: 'Войти', form: 'loginForm', id: 'loginFormButton'},
        {type: 'button', text: 'Нет аккаунта?', form: 'loginForm', id: 'registrationLoginFormButton'}
    ]
}

export const login = () => {
    Handlebars.registerPartial('loginForm', authorizationForm(data))

    return tmpl()
}