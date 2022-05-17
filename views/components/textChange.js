import { h2 } from "./widgets/h2.js"
const textChange = function(){
const h2Elem = h2('Use events to change me')
h2Elem.id = "changeText"
return h2Elem
}

export {textChange}