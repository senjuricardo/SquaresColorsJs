import { input } from "./widgets/input.js"
import { button } from "./widgets/button.js"
import { changeTextEvent } from "../events/changeTextEvent.js"
import { cleanReset } from "../events/cleanReset.js"

const firstRow = function(){
    const firstRowDiv = document.createElement('div')
    const inputElem = input('text', 'Label', ['p-5']);
    inputElem.addEventListener('keyup', changeTextEvent )
    
    const buttonElem = button('clear', ['p-5', 'bg-purple'])
    buttonElem.addEventListener('click', cleanReset)

firstRowDiv.append(inputElem, buttonElem)

return firstRowDiv

}
export {firstRow}