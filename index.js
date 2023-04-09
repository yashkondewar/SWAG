const tb = document.querySelector('.toggle_btn')
const tbi = document.querySelector('.toggle_btn i')
const ddm = document.querySelector('.dropdown_menu')

tb.onclick = function(){
    ddm.classList.toggle('open')
    const opn = ddm.classList.contains('open')

    tbi.classList = opn ? "fa-solid fa-xmark" : "fa-solid fa-bars"
}


