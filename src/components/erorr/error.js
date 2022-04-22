import Handlebars from 'handlebars'

import tmpl from './error.hbs'
import './error.scss'
import {button} from "../button/button";

const buttonData = {type: 'button', text: 'Назад к чатам', id: 'backToMessenger'}

Handlebars.registerPartial('backToMessenger', button(buttonData))

export const error = (data) => tmpl(data);