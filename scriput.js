const menu = document.getElementById("menu");
const nav = document.getElementById("sp-menu");

// 初回に三本線を生成
for (let i = 0; i < 3; i++) {
    const line = document.createElement("div");
    menu.appendChild(line);
}

// クリック時の処理
menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    nav.classList.toggle("active");
});