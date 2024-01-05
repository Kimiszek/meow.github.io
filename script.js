const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const takBtn = document.querySelector(".tak-btn");
const nieBtn = document.querySelector(".nie-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Splendid, to może jakiś meet zaproponuj ;3";
  gif.src =
    "https://media.giphy.com/media/VKUSdDIW7vXWwTFCtf/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
