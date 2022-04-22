import {login} from "./authorization/login/login";
import {registration} from "./authorization/registration/registration";
import {internalError} from "./errors/internalError";
import {wrongPathError} from "./errors/wrongPathError";
import {profile} from "./profile/profile";
import {chats} from "./chats/chats";

export {
    login,
    registration,
    internalError,
    wrongPathError,
    profile,
    chats,
}