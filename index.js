document.addEventListener('DOMContentLoaded', replaceText )

function replaceText(e) {
    let text = document.querySelector('#text')
    text.innerHTML = 'This is really cool!'
}