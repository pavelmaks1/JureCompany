document.getElementsByClassName('toggle-menu')[0].addEventListener('click', () => {
    document.getElementsByClassName('navbar-mobile')[0].classList.toggle('active');
    console.log(document.getElementsByClassName('navbar-mobile')[0])
})
