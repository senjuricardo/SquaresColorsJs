const span = function(text){
    const spanEvents = document.createElement('span')
    spanEvents.textContent = text;
    return spanEvents
}


export {span};