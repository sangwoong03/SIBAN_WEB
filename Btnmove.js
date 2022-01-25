const btnMoveFirst = document.getElementById("btn1");
const btnMoveSecond = document.getElementById("btn2");
const btnMoveThird = document.getElementById("btn3");
const slideBox = document.querySelector(".img-slide")
const btnMoveToSide = document.querySelectorAll(".move-btn-to-side");

btnMoveFirst.addEventListener ('click', function() {
    slideBox.style.transform = "translateX(0)";
});
btnMoveSecond.addEventListener ('click', function() {
    slideBox.style.transform = "translateX(-400px)";
});
btnMoveThird.addEventListener ('click', function() {
    slideBox.style.transform = "translateX(-800px)";
});