function clicked(element) {
    let displayedText = element.innerText
    if(displayedText == 'Login'){
        element.innerText = 'Logout'
    }
    else{
        element.innerText = 'Login'
    }
}
function hide(element) {
    element.remove();
}
