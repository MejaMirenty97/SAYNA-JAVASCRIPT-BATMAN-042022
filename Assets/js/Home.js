// Header
const items = document.querySelectorAll("ul li");
items.forEach(item => {
    item.addEventListener("mouseenter", () => {
        document.querySelector("li.active").classList.remove("active");
        item.classList.add("active");
    });
});

// scoll sticky menu
const scrol = document.querySelector(".scrol");
const stickyProject = document.querySelector(".project")

let current = 0;
let target = 0;
const ease = 0.1;

function defil(start, end, m) {
    return start * (1 - m) + end * m;
};

function init() {
    document.body.style.height = "${scrol.getBoundingClientRect().height}px"
};

function smoothdefil() {
    target = window.scrollY;
    current = defil(current, target, ease);
    scrol.style.transform = "translate3d(0, ${-current}px, 0)";
    window.requestAnimationFrame(smoothdefil);
};

function sticky() {
    let offset = window.innerHeight * 2;
    if (current < offset) {
        stickyProject.style.transform = "translate3d(0, 0, 0)";
    };
    if (current >= offset && current <= offset * 2) {
        stickyProject.style.transform = "translate3d(0, ${current - offset}px, 0)";
    };
    if (current > offset * 2) {
        stickyProject.style.transform = "translate3d(0, ${offset}px, 0)";
    }
};
init()
smoothdefil()
    // slide

var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 10) {
        counter = 1;
    }
}, 5000);
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide")
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setInterval(showSlides, 5000);
};