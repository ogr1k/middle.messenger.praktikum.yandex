import Handlebars from 'handlebars';

import tmpl from './field.hbs'
import './field.scss'

Handlebars.registerHelper('isDisabled',function() {
   return this.disabled ? 'disabled' : ''
});

export const field = (data) => tmpl(data)