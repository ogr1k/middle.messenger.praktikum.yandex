import { login } from "./src/pages/login/login"

import './index.scss'

const RenderDom = () => {
    const root = document.getElementById('root')

    root.innerHTML = login()
}

RenderDom();