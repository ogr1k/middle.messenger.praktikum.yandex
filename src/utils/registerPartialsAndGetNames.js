import Handlebars from "handlebars";

export const registerPartialsAndGetNames = ({data, keyToSetPartialName, tmpl}) => {
    return data.map((el) => {
        Handlebars.registerPartial(el[keyToSetPartialName], tmpl(el))
        return el[keyToSetPartialName]
    })
}