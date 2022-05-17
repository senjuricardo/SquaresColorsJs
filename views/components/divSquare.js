import { h2 } from "./widgets/h2.js"
import { changeColorText } from "../events/changeColorText.js"

const divSquare = function (text, color){
   const h2Elem = h2(text,  ['p-30', `bg-${color}`])
   h2Elem.color = color
   h2Elem.addEventListener('mouseover', changeColorText)
   h2Elem.addEventListener('mouseleave', changeColorText)


   return h2Elem

}

export {divSquare}