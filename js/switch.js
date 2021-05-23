const toggleSwitch = document.querySelector('.button_two input[type="checkbox"]');

const currentTheme = localStorage.getItem('mode') ? localStorage.getItem('mode') : null;

if (currentTheme) {
    document.documentElement.setAttribute('change-mode', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}


toggleSwitch.addEventListener('change', colorModeSwitch, false);

function colorModeSwitch(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('change-mode', 'dark');
        localStorage.setItem('mode', 'dark');
    }
    else {
        document.documentElement.setAttribute('change-mode', 'light');
        localStorage.setItem('mode', 'light');
    }
}


