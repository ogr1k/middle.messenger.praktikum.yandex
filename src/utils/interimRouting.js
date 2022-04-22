import Handlebars from "handlebars";
import {chats, internalError, login, profile, registration, wrongPathError} from "../pages";
import {ProfilePageTypes} from "../pages/profile/profile";
import tmpl from "../../index.hbs";
import {Paths} from "./contants/paths";

const changeLocation = (path) => window.location.assign(path)
const registerPagePartial = (template, addData) => Handlebars.registerPartial('page' , template(addData))

export const addEventListenersToInterimNav = (root) => {
    const navButtons = root.querySelector('.interimNavigationButtons').querySelectorAll('.button')
    navButtons.forEach((el) => {
        el.addEventListener('click',() => {
            switch (el.id) {
                case 'loginNav': {
                    changeLocation(Paths.LOGIN)
                } break;
                case 'registrationNav': {
                    changeLocation(Paths.REGISTRATION)
                } break;
                case 'chatNav': {
                    changeLocation(Paths.CHAT)
                } break;
                case 'profileNav': {
                    changeLocation(Paths.PROFILE)
                } break;
                case 'profileEditNav': {
                    changeLocation(Paths.PROFILE_EDIT_INTERIM)
                } break;
                case 'profileEditPassNav': {
                    changeLocation(Paths.PROFILE_EDIT_PASSWORD_INTERIM)
                } break;
                case 'internalErrorNav': {
                    changeLocation(Paths.INTERNAL)
                } break;
                case 'wrongPathNav': {
                    changeLocation(Paths.WRONG_PATH)
                } break;
            }
            root.innerHTML = tmpl()
            addEventListenersToInterimNav(root)
        })
    })}


export const registerPagePartialDependsOnCurrentPath = () => {
            switch (window.location.pathname) {
                case Paths.LOGIN: {
                    registerPagePartial(login)
                } break;
                case Paths.REGISTRATION: {
                    registerPagePartial(registration)
                } break;
                case Paths.CHAT: {
                    registerPagePartial(chats)
                } break;
                case Paths.PROFILE: {
                    registerPagePartial(profile, ProfilePageTypes.PROFILE)
                } break;
                case Paths.PROFILE_EDIT_INTERIM: {
                    registerPagePartial(profile, ProfilePageTypes.PROFILE_EDIT)
                } break;
                case Paths.PROFILE_EDIT_PASSWORD_INTERIM: {
                    registerPagePartial(profile, ProfilePageTypes.PROFILE_CHANGE_PASSWORD)
                } break;
                case Paths.INTERNAL: {
                    registerPagePartial(internalError)
                } break;
                default: {
                    registerPagePartial(wrongPathError)
                } break;
            }
    }