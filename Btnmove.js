// artist 중 최영광만 해당.....
const btnFirst = document.getElementById("btn1");
const btnSecond = document.getElementById("btn2");
const btnThird = document.getElementById("btn3");
const imgSlide = document.querySelector(".img-slide");

btnFirst.onclick = () => {
    imgSlide.style.left = '0';
}
btnSecond.onclick = () => {
    imgSlide.style.left = '-400px';
}
btnThird.onclick = () => {
    imgSlide.style.left = '-800px';
}

// const imgSlide = document.querySelector(".img-slide"); 이렇게 하면 처음 사람 profile만 적용됨...
// 나머지 article들에 있는 버튼들을 dom 선택해서 하기..?