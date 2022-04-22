import Handlebars from "handlebars"

import {interimNavigationButtons} from "./src/components/interimNavigationButtons/interimNavigationButtons"
import tmpl from './index.hbs'
import './index.scss'
import {addEventListenersToInterimNav, registerPagePartialDependsOnCurrentPath} from "./src/utils/interimRouting"

const RenderDom = () => {
    const root = document.getElementById('root')
    Handlebars.registerPartial('header' , interimNavigationButtons())
    registerPagePartialDependsOnCurrentPath();

    root.innerHTML = tmpl()
    addEventListenersToInterimNav(root)
}

RenderDom();