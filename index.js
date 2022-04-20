import { login } from "./src/pages/authorization/login/login"
import { registration } from "./src/pages/authorization/registration/registration";

import './index.scss'

const RenderDom = () => {
    const root = document.getElementById('root')

    root.innerHTML = registration()
}

RenderDom();