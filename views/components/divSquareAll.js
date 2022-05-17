import { divSquare } from "./divSquare.js"

const divSquareAll = function(){

const divSquareAll = document.createElement('div')
divSquareAll.id = 'squares'
divSquareAll.classList.add('flex', 'space-bet')
divSquareAll.append(divSquare('A', 'red'), divSquare('B', 'green'), divSquare('C', 'blue'))
return divSquareAll
}

export {divSquareAll}