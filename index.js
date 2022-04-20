import Handlebars from "handlebars";

import { login } from "./src/pages/authorization/login/login"
import { registration } from "./src/pages/authorization/registration/registration"
import {interimNavigationButtons} from "./src/components/interimNavigationButtons/interimNavigationButtons"
import tmpl from './index.hbs'
import './index.scss'

Handlebars.registerPartial('buttons' , interimNavigationButtons())
Handlebars.registerPartial('page' , login())

const addEventListenersToInterimNav = (root) => {
    const navButtons = root.querySelector('.interimNavigationButtons').querySelectorAll('button')
    navButtons.forEach((el) => {
        el.addEventListener('click',() => {
            switch (el.id) {
                case 'loginNav': {
                    Handlebars.registerPartial('page' , login())
                } break;
                case 'registrationNav': {
                    Handlebars.registerPartial('page' , registration())
                } break;
            }
            root.innerHTML = tmpl()
            addEventListenersToInterimNav(root)
        })
    })}

const RenderDom = () => {
    const root = document.getElementById('root')

    root.innerHTML = tmpl()
    addEventListenersToInterimNav(root)
}

RenderDom();