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

nieBtn.addEventListener("mouseover", () => {
  const nieBtnRect = nieBtn.getBoundingClientRect();
  const maxX = window.innerWidth - nieBtnRect.width;
  const maxY = window.innerHeight - nieBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  nieBtn.style.left = randomX + "px";
  nieBtn.style.top = randomY + "px";
});
