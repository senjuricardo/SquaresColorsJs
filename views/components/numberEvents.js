import { h2 } from "./widgets/h2.js"
import { span } from "./widgets/span.js"


const numberEvents= function(){
const h2Elem = h2(`Number of Events: `);
h2Elem.id = 'numberEvents'
h2Elem.append(span('0'))
return h2Elem


}

export{numberEvents}