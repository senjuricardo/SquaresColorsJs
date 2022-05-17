const button = function(text, classList =[]){
    const button = document.createElement('button')
    button.textContent = text;
    classList.forEach(classe => button.classList.add(classe));
    return button;

}
export {button}