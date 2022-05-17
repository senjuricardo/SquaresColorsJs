import { firstRow } from "./components/firstRow.js"
import { numberEvents } from "./components/numberEvents.js"
import { textChange } from "./components/textChange.js"
import { divSquareAll } from "./components/divSquareAll.js"



const renderUI = function(){
   const divMain = document.querySelector('#main')
  divMain.append(numberEvents(), firstRow(), textChange(),divSquareAll() );



}

export {renderUI}