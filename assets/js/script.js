//Fazer o menu mobile funcionar 
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/css/img/menu_white_36dp.svg";
    } else { //mudar icon
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/css/img/close_white_36dp.svg";
    }
}