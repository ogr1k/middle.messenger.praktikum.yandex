import Handlebars from 'handlebars'

import tmpl from './authorizationForm.hbs'
import {field} from "../field/field"
import {button} from "../button/button"
import './authorizationForm.scss'

export const authorizationForm = (data) => {
    const { title, formName } = data;

    const partialNamesFields = data.fields.map((el) => {
        Handlebars.registerPartial(el.name, field(el))
        return el.name
    })

    const partialNamesButtons = data.buttons.map((el) => {
        Handlebars.registerPartial(el.text, button(el))
        return el.text
    })

    return tmpl({fieldsNames: partialNamesFields, buttonsNames: partialNamesButtons, title, formName})
}