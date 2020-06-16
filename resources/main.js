// TOGGLE MOBILE MENU
const toggleMenu = () => {
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.nav-links');
    let links = document.querySelectorAll('.nav-links-mobile li')
    //TOGGLE NAV
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-links-mobile');

    //BURGER ANIMATION
    burger.classList.toggle('toggle');

    //LINK ANIMATIONS
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else [
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 2}s`
            ]
        });
        
    });


}
toggleMenu();

