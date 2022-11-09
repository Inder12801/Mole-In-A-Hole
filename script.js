let box1 = document.querySelectorAll(".box1");
box1 = Array.from(box1);

let score = 0;
let gameCounter = 10;
const moveRandomBox = () => {
  let randomeIndex = Math.round(Math.random() * 5);
  let box2 = box1[randomeIndex].firstElementChild;
  box2.classList.add("trans");
  setTimeout(() => {
    box2.classList.remove("trans");
  }, 600);
  gameCounter--;
  if (gameCounter === 0) {
    clearInterval(interval);
    remark.innerHTML = "Game Over!!!";
    gameCounter = 10;
  } else {
  }
};

let timeUp = false;

let interval;

let remark = document.querySelector(".remark");

function startGame() {
  remark.innerHTML = "Catch it!!!";
  if (timeUp) {
    document.querySelector(".start").addEventListener("click", () => {
      interval = setInterval(moveRandomBox, 1000);
    });
  } else {
    timeUp = false;
    return;
  }
}
function stopGame() {
  document.querySelector(".stop").addEventListener("click", () => {
    clearInterval(interval);
    score = 0;
    document.querySelector(".score").innerHTML = "Your Score : " + score;
  });
}

if (!timeUp) {
  timeUp = true;
  startGame();
  timeUp = false;
}
stopGame();

document.querySelectorAll(".box2").forEach((e) => {
  e.addEventListener("click", () => {
    score++;
    document.querySelector(".score").innerHTML = "Your Score : " + score;
    remark.innerHTML = "Got It!!!";
    console.log(score);
  });
});

function scaleBtn() {
  document.querySelector(".btn").classList.add("btnScale");
  setTimeout(() => {
    document.querySelector(".btn").classList.remove("btnScale");
  }, 200);
}
