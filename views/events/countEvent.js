import { divSquare } from "../components/divSquare.js";

const countEvent = function (){
        const h2Count = document.querySelector('#numberEvents') 
       const [span] = h2Count.children;
       if(!span.hasOwnProperty("count")) 
       span.count = 1
       else{
           if(span.count ==10)
          document.querySelector('#squares').append(divSquare('D', 'purple'))
       }
        
       span.count = span.count +1
       span.textContent = span.count

}

export {countEvent}