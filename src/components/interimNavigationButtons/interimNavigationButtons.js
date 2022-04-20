import Handlebars from 'handlebars'

import tmpl from './interimNavigationButtons.hbs'
import {button} from "../button/button";
import './interimNavigationButtons.scss'

const data = {
    buttons: [
        {type: 'button', text: 'Вход', id: 'loginNav'},
        {type: 'button', text: 'Регистрация', id: 'registrationNav'}
    ]
}

export const interimNavigationButtons = () => {
    const partialNamesButtons = data.buttons.map((el) => {
        Handlebars.registerPartial(el.text,button(el))
        return el.text;
    })

    return tmpl({partialNamesButtons})
}