import Handlebars from 'handlebars'

import tmpl from './profile.hbs'
import {Icons} from "../../components/icons";
import {registerPartialsAndGetNames} from "../../utils/registerPartialsAndGetNames"
import {field} from "../../components/field/field"
import {button} from "../../components/button/button"
import './profile.scss'

export const ProfilePageTypes = {
    PROFILE: 'PROFILE',
    PROFILE_EDIT: 'PROFILE_EDIT',
    PROFILE_CHANGE_PASSWORD: 'PROFILE_CHANGE_PASSWORD'
}

const data = {
    userName: 'Иван',
    formName: 'profile',
    mainFields: [
        {label: "Почта", type: 'text',  name: 'email' },
        {label: "Логин", type: 'text', name: 'login' },
        {label: "Имя", type: 'text', name: 'first_name'},
        {label: "Фамилия", type: 'text', name: 'second_name'},
        {label: "Имя в чате", type: 'text', name: 'display_name'},
        {label: "Телефон", type: 'text', name: 'phone'}
    ],
    passwordEditFields: [
        {label: "Старый пароль", type: 'password',  name: 'oldPassword' },
        {label: "Новый пароль", type: 'password', name: 'newPassword' },
        {label: "Повторите новый пароль", type: 'password', name: 'newPasswordRepeat'},
    ],
    buttonsProfile: [
        {type: 'button', text: 'Изменить данные', id: 'changeDataProfileButton', form: 'profile'},
        {type: 'button', text: 'Изменить пароль', id: 'changePasswordProfileButton', form: 'profile'},
        {type: 'button', text: 'Выйти', id: 'exitProfileButton', form: 'profile'}
    ],
    buttonsEdit: [
        {type: 'submit', text: 'Сохранить', id: 'saveDataProfileButton', form: 'profile'},
    ],
}

const prepareData = (data, profileType) => {
    const {userName, mainFields, passwordEditFields, buttonsProfile, buttonsEdit, formName} = data;

    switch (profileType) {
        case ProfilePageTypes.PROFILE: {
            return {formName, userName, fields: mainFields.map((field) => ({...field, disabled: true})), buttons: buttonsProfile}
        }
        case ProfilePageTypes.PROFILE_EDIT: {
            return {formName, fields: mainFields , buttons: buttonsEdit}
        }
        case ProfilePageTypes.PROFILE_CHANGE_PASSWORD: {
            return {formName, fields: passwordEditFields, buttons: buttonsEdit}
        }
    }
}

export const profile = (profileType) => {
    const preparedData = prepareData(data, profileType);

    Handlebars.registerPartial('arrowIcon', Icons.leftArrow())
    const fieldsNames = registerPartialsAndGetNames({data: preparedData.fields, keyToSetPartialName: 'name', tmpl: field})
    const buttonsNames = registerPartialsAndGetNames({data: preparedData.buttons, keyToSetPartialName: 'text', tmpl: button})

    return tmpl({
        fieldsNames,
        buttonsNames,
        userName: preparedData.userName,
        formName: preparedData.formName
    })
}