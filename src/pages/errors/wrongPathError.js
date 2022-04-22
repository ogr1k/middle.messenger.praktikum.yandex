import {error} from "../../components/erorr/error";

const data = { errorCode: '404', message: 'Не туда попали' };

export const wrongPathError = () => error(data);