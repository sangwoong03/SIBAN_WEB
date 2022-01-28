const openBtn = document.querySelectorAll(".open-btn");
const closeBtn = document.querySelectorAll(".close-btn");
const profile = document.querySelectorAll(".section-profile-card");

// OPEN
openBtn.item(0).onclick = () => {
    profile.item(0).style.display = 'flex';
}
openBtn.item(1).onclick = () => {
    profile.item(1).style.display = 'flex';
}
openBtn.item(2).onclick = () => {
    profile.item(2).style.display = 'flex';
}
openBtn.item(3).onclick = () => {
    profile.item(3).style.display = 'flex';
}
openBtn.item(4).onclick = () => {
    profile.item(4).style.display = 'flex';
}
openBtn.item(5).onclick = () => {
    profile.item(5).style.display = 'flex';
}

// CLOSE
closeBtn.item(0).onclick = () => {
    profile.item(0).style.display = 'none';
}
closeBtn.item(1).onclick = () => {
    profile.item(1).style.display = 'none';
}
closeBtn.item(2).onclick = () => {
    profile.item(2).style.display = 'none';
}
closeBtn.item(3).onclick = () => {
    profile.item(3).style.display = 'none';
}
closeBtn.item(4).onclick = () => {
    profile.item(4).style.display = 'none';
}
closeBtn.item(5).onclick = () => {
    profile.item(5).style.display = 'none';
}

// 2022-01-26
// document.querySelector.All을 통해 참조한 class들은 배열 값으로 상수 변환
// 상수.item(n)은 배열 값을 가진 집합 상수에서 n번째 항목 선택
// 반복문으로 어떻게 바꾸지???