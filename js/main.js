//
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---------------common script below-----------------~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
//

//
//
// scrolling script here below
//
//
window.addEventListener("scroll", function () {
    var headerSectionBottom = document.getElementById("scrollstop");
    headerSectionBottom.classList.toggle("sticky", window.scrollY > 0);
});

//
//
// header section onclick script here below
//
//
const menuBar = document.getElementById("menu-bar");
const menu = document.getElementById("menu");

menuBar.addEventListener("click", () => {
    if (menu.className === "hidden") {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
});

//
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---------------common script ends-----------------~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
//

//
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---------------landing page script below-----------------~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
//

//
//
// hero section image slider script here below
//
//
var counter = 1;
setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 5) {
        counter = 1;
    }
}, 5000);

//
//
// card slider popular course section script here below
//
//
var sliderPop = document.getElementById("pop-cards-container");
var cardPop = document.getElementsByClassName("card-pop");

function nextpop() {
    sliderPop.appendChild(cardPop[0]);
}

function prevpop() {
    sliderPop.prepend(cardPop[cardPop.length - 1]);
}

//
//
// card slider course instructor section script here below
//
//
var sliderCour = document.getElementById("cour-cards-container");
var cardCour = document.getElementsByClassName("card-cour");

function nextcour() {
    sliderCour.appendChild(cardCour[0]);
}

function prevcour() {
    sliderCour.prepend(cardCour[cardCour.length - 1]);
}

//
//
// card slider testimonial section script here below
//
//
var sliderTest = document.getElementById("test-cards-container");
var cardTest = document.getElementsByClassName("card-test");

function nexttest() {
    sliderTest.appendChild(cardTest[0]);
}

function prevtest() {
    sliderTest.prepend(cardTest[cardTest.length - 1]);
}
