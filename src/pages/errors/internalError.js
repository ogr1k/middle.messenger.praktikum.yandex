import {error} from "../../components/erorr/error";

const data = { errorCode: '500', message: 'Мы уже фиксим' }

export const internalError = () => error(data);
