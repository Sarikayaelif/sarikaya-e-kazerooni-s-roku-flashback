
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

function show(){
    
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    
}
function close(){
    mainMenu.style.top = '-120%';
}

openMenu.addEventListener('click',show);

closeMenu.addEventListener('click',close);