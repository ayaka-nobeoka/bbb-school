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

const images = document.querySelectorAll('.article-img-box img');
let nextIndex = 1;

function imgAppear() {
  if (nextIndex >= images.length) {
    nextIndex = 0;
  }

  images.forEach(image => {
    image.classList.remove('active');
  });

  images[nextIndex].classList.add('active');
  nextIndex++;
}

setInterval(imgAppear, 5000);

//メインめにゅー

const mainBtn = document.getElementById("title-btn");

mainBtn.addEventListener("mouseover", () => {
    mainBtn.style.transform = 'scale(1.05)';   // 5%拡大
});

// マウスアウトで元に戻す
mainBtn.addEventListener('mouseout', () => {
    mainBtn.style.transform = 'scale(1)';      // 元のサイズに戻す
});

const fadein = document.getElementById("slide01");
window.addEventListener("scroll", () => {
  const fadeinTOP = fadein.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if(windowHeight > (fadeinTOP + 200)) {
    fadein.classList.add("fadein-after");
  }else{
    fadein.classList.remove("fadein-after")
  }
});
const fadein02 = document.getElementById("slide02");
window.addEventListener("scroll", () => {
  const fadeinTOP = fadein02.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if(windowHeight > (fadeinTOP + 200)) {
    fadein02.classList.add("fadein-after");
  }else{
    fadein02.classList.remove("fadein-after")
  }
});

// 全てのコメント要素を取得
const comments = document.querySelectorAll(".comment, .comment-left");

window.addEventListener("scroll", () => {
  comments.forEach((comment) => {
    const fadeinTOP = comment.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (windowHeight > (fadeinTOP + 100)) {
      comment.classList.add("pop-in");
    } else {
      comment.classList.remove("pop-in");
    }
  });
});

const background = document.getElementById('background');

let posX = 0; // 横方向の位置
let posY = 0; // 縦方向の位置
const speed = 1;  // スクロール速度

function animateBackground() {
  posX -= speed;   // 左方向に移動
  posY += speed;   // 上方向に移動

  // 背景位置を更新
  background.style.backgroundPosition = `${posX}px ${posY}px`;

  // 無限ループでアニメーション
  requestAnimationFrame(animateBackground);
}

animateBackground();

  // 要素の背景を変える処理を追加
  const coupon = document.getElementById('coupon-btn')

  coupon.addEventListener("mouseover", () => {
    coupon.style.backgroundColor = '#fff';
    coupon.style.color = '#ff2a2a';
});
coupon.addEventListener("mouseout", () => {
  coupon.style.backgroundColor = '#ff2a2a';  // 元の赤背景に戻す
  coupon.style.color = '#fff';               // 文字色を白に戻す
});

