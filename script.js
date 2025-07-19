const tenis1 = document.getElementById('tenis1');
const tenis2 = document.getElementById('tenis2');

const arrowLeft = document.getElementById('left');
const arrowRight = document.getElementById('right');

//Desativa seta de esquerda no inicio
arrowLeft.classList.add('disable');

setaLeft.addEventListener('click', () => {
    tenis1.style.left = "650px";
    tenis2.style.left ="-50px";

    arrowRight.classList.add('disable');
    arrowLeft.classList.remove('disable')
})
setaRight.addEventListener('click', () => {
    tenis1.style.left = "-50px";
    tenis2.style.left = "-650px";

    arrowLeft.classList.add('disable')
    arrowRight.classList.remove('disable');
})
