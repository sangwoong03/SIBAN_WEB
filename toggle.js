const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("profile1");
// const modalList = document.querySelectorAll(".section-profile-card");
// const index = modalList.indexOf(card)


open.onclick = () => {
    modal.style.display = 'flex';
};

close.onclick = () => {
    modal.style.display = 'none';
};





// profile1~7까지 1부터 7값만 비교
// profile은 동일하니 뒤에 숫자만 비교했을 때 ... 음

