import { countEvent } from "./countEvent.js "
const changeColorText = function(e){
    const h2Elem = document.querySelector('#changeText')

   h2Elem.classList.toggle(`text-${e.target.color}`)
   countEvent()

    
}

export {changeColorText}