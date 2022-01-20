const slides = document.querySelector(".tiles--slide");
const tile = document.querySelectorAll(".tiles");
const slideCount = tile.length;
const leftBtn = document.getElementById("move--left");
const rightBtn = document.getElementById("move--right");
const slideWidth = 300;
const slideMargin = 30;

slides.style.width = (slideMargin + slideWidth) * slideCount - slideMargin + "px";

let currentIdx = 0;
function moveTile(num) {
    slides.style.left = - num * 330 + "px";
    currentIdx = num;
}

leftBtn.addEventListener('click', function() {
    if ( currentIdx <= slideCount - 3 && currentIdx > 0) {
        moveTile(currentIdx - 1);
    };
});

rightBtn.addEventListener('click', function() {
    if ( currentIdx < slideCount - 3) {
        moveTile(currentIdx + 1);
    };
});
