// Navbar appearing animation when hidden on scrolling
let navbar = document.getElementById("nav-bar");
let sections = document.getElementsByClassName("full-page");
let lastScrollTop = Number.NEGATIVE_INFINITY;

// To create parallax scrolling effect in the background of main div
document.body.onscroll = () => {
    // For navbar
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let height = navbar.offsetHeight;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = -height + "px";
    }
    else {
        navbar.style.top = "0px";
    }
    lastScrollTop = scrollTop;

    let mainSection = sections[0].getBoundingClientRect();
    let aboutSection = sections[1].getBoundingClientRect();
    let workSection = sections[2].getBoundingClientRect();
    let contactSection = sections[3].getBoundingClientRect();

    if (mainSection.bottom >= window.screen.height / 2 && mainSection.top <= window.screen.height / 2) {
        document.body.style.backgroundImage = 'url("./static/images/main.jpg")';
    }
    else if (aboutSection.bottom >= window.screen.height / 2 && aboutSection.top <= window.screen.height / 2) {
        document.body.style.backgroundImage = 'url("./static/images/about.jpg")';
    }
    else if (workSection.bottom >= window.screen.height / 2 && workSection.top <= window.screen.height / 2) {
        document.body.style.backgroundImage = 'url("./static/images/work.jpg")';
    }
    else if (contactSection.bottom >= window.screen.height / 2 && contactSection.top <= window.screen.height / 2) {
        document.body.style.backgroundImage = 'url("./static/images/contact.jpg")';
    }
}