window.addEventListener('load', function () {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');

    menu.addEventListener('click', function () {
        console.log("log knapp");
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    })
})
