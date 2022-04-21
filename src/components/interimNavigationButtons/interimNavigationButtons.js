import Handlebars from 'handlebars'

import tmpl from './interimNavigationButtons.hbs'
import {button} from "../button/button";
import './interimNavigationButtons.scss'

const data = {
    buttons: [
        {type: 'button', text: 'Вход', id: 'loginNav'},
        {type: 'button', text: 'Регистрация', id: 'registrationNav'},
        {type: 'button', text: 'Заглушка чата', id: 'chatNav'},
        {type: 'button', text: 'Профиль', id: 'profileNav'},
        {type: 'button', text: 'Профиль изменение', id: 'profileEditNav'},
        {type: 'button', text: 'Профиль изменение пароля', id: 'profileEditPassNav'},
    ]
}

export const interimNavigationButtons = () => {
    const partialNamesButtons = data.buttons.map((el) => {
        Handlebars.registerPartial(el.text,button(el))
        return el.text;
    })

    return tmpl({partialNamesButtons})
}