import { countEvent } from "./countEvent.js "
const changeTextEvent = function(e, cleanText = false){
    const h2Elem = document.querySelector('#changeText');
    const inputValue = e.target.value
    h2Elem.textContent = (inputValue ) ? inputValue : "Use events to change me";
    countEvent()
}

export {changeTextEvent}