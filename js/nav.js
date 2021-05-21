window.addEventListener('load', function () {
    const nav = document.querySelector('#mobile-menu');
    const navlinks = document.querySelector('.nav-menu');

    nav.addEventListener('click', function () {
        console.log("log knapp");
        nav.classList.toggle('is-active');
        navlinks.classList.toggle('active');
    })
})
