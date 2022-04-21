import Handlebars from 'handlebars'

import tmpl from './profile.hbs'
import {Icons} from "../../components/icons";
import {registerPartialsAndGetNames} from "../../utils/registerPartialsAndGetNames"
import {field} from "../../components/field/field"
import {button} from "../../components/button/button"
import './profile.scss'

const data = {
    userName: 'Иван',
    fields: [
        {label: "Почта", type: 'text',  name: 'email', disabled: true },
        {label: "Логин", type: 'text', name: 'login', disabled: true },
        {label: "Имя", type: 'text', name: 'first_name', disabled: true},
        {label: "Фамилия", type: 'text', name: 'second_name', disabled: true},
        {label: "Имя в чате", type: 'text', name: 'display_name', disabled: true},
        {label: "Телефон", type: 'text', name: 'phone', disabled: true}
    ],
    buttons: [
        {type: 'button', text: 'Изменить данные', id: 'changeDataProfileButton'},
        {type: 'button', text: 'Изменить пароль', id: 'changePasswordProfileButton'},
        {type: 'button', text: 'Выйти', id: 'exitProfileButton'}
    ]
}

export const profile = () => {
    Handlebars.registerPartial('arrowIcon', Icons.leftArrow())
    const fieldsNames = registerPartialsAndGetNames({data: data.fields, keyToSetPartialName: 'name', tmpl: field})
    const buttonsNames = registerPartialsAndGetNames({data: data.buttons, keyToSetPartialName: 'text', tmpl: button})

    return tmpl({fieldsNames, buttonsNames, userName: data.userName})
}