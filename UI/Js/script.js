function toggleNavMenu(){
    const nav = document.querySelectorAll('.navMenu');

    nav.forEach(navg => navg.classList.toggle('navMenu_Toggle'));
}

function animateIcon(){
    const icon = document.querySelector('#menu-icon');

    icon.classList.toggle('open');
}
document.querySelector('#menu-icon').addEventListener('click', function(){
    toggleNavMenu();
    animateIcon();
});
