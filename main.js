const toggle = document.querySelector('.toggle')
const links = document.querySelectorAll('.social_link')
const header = document.querySelector('header')

//open mobile menu
if (toggle) {
    //we add the show-menu class to the div tag with the nav_menu class
    toggle.addEventListener('click', () => {
        header.classList.add('active');
    })
}

//remove mobile menu
links.forEach(n => n.addEventListener('click', () => {
    header.classList.remove('active')
}))