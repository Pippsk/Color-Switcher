const body = document.body;
const switchBtn = document.querySelector(".switch");
const switchPara = document.querySelector(".color");

switchBtn.addEventListener("click", function () {
  let number1 = getRandomNum();
  let number2 = getRandomNum();
  let number3 = getRandomNum();
  let number4 = getAlphaNum();

  const color = `rgba(${number1}, ${number2},  ${number3}, ${number4})`;

  //   console.log(color);

  body.style.backgroundColor = color;
  switchPara.innerText = color;
});

function getRandomNum() {
  return Math.floor(Math.random() * 256);
}

function getAlphaNum() {
  return Math.random().toFixed(1);
}
