import Handlebars from 'handlebars'

import tmpl from './registration.hbs'
import {authorizationForm} from "../../../components/authorizationForm/authorizationForm";
import './registration.scss';

const data = {
    formName: 'registrationForm',
    title: 'Регистрация',
    fields: [
        {label: "Почта", type: 'text',  name: 'email'},
        {label: "Логин", type: 'text',  name: 'login'},
        {label: "Имя", type: 'text',  name: 'first_name'},
        {label: "Фамилия", type: 'text',  name: 'second_name'},
        {label: "Телефон", type: 'text', name: 'phone'},
        {label: "Пароль", type: 'password', name: 'password'},
        {label: "Пароль (еще раз)", type: 'password', name: 'passwordRepeat'}
    ],
    buttons: [
        {type: 'submit', text: 'Зарегистрироваться', form: 'registrationForm', id: 'registrationFormButton'},
        {type: 'button', text: 'Войти', form: 'registrationForm', id: 'loginRegistrationFormButton'}
    ]
}

export const registration = () => {
    Handlebars.registerPartial('loginForm', authorizationForm(data))

    return tmpl()
}