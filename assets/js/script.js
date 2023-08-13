//aqui empieza el js del trabajo 1
const imgContainer = document.getElementById("js-img");

let clickCounter = 0;
imgContainer.addEventListener("click", () => {
  clickCounter += 1;
  //hola profe, mantuve el codigo original para no hacer trampa
  if (clickCounter % 2 == 1) {
    imgContainer.style.border = "2px solid red";
  } else {
    imgContainer.style.border = "";
  }
});
//aqui termina el js del trabajo 1
//aqui empieza el js del trabajo 2
const firstStickerQuantity = document.getElementById("first-sticker-quantity");
const secondStickerQuantity = document.getElementById(
  "second-sticker-quantity"
);
const thirdStickerQuantity = document.getElementById("third-sticker-quantity");
const btn = document.getElementById("calcButton");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  const a = firstStickerQuantity.value;
  const b = secondStickerQuantity.value;
  const c = thirdStickerQuantity.value;
  const sum = Number(a) + Number(b) + Number(c);
  if (sum <= 10) {
    result.innerHTML = "total: " + sum;
  } else {
    result.innerHTML = "Llevas demasiados golosooo! tuki";
  }
});
//aqui termina el js del trabajo 2
//aqui empieza el js del trabajo 3
const primerDigito = document.getElementById("primer-digito");
const segundoDigito = document.getElementById("segundo-digito");
const tercerDigito = document.getElementById("tercer-digito");
const passBtn = document.getElementById("pass-button");
const passResult = document.getElementById("pass-result");

passBtn.addEventListener("click", () => {
  const selectedPass =
    primerDigito.value + segundoDigito.value + tercerDigito.value;
  console.log(selectedPass);
  if (selectedPass == "911") {
    passResult.innerHTML = "password 1 correcto";
  } else if (selectedPass == "714") {
    passResult.innerHTML = "password 2 correcto";
  } else {
    passResult.innerHTML = "password incorrecto";
  }
});
//aqui termina el js del trabajo 3
