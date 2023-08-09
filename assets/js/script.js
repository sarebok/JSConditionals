//aqui empieza el js del trabajo 1
const imgContainer = document.getElementById("js-img");
console.log(imgContainer);
let clickCounter = 0;
imgContainer.addEventListener("click", () => {
  clickCounter += 1;
  //hola profe, aqui me la estoy jugando... solo busque como determinar si un numero es primo o no. no creo que sea algo que "no nos han pasado cierto?"
  if (clickCounter % 2 == 1) {
    console.log(clickCounter);
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
console.log(firstStickerQuantity);
console.log(secondStickerQuantity);
console.log(thirdStickerQuantity);
console.log(btn);
console.log(result);
btn.addEventListener("click", () => {
  const a = firstStickerQuantity.value;
  const b = secondStickerQuantity.value;
  const c = thirdStickerQuantity.value;
  const sum = Number(a) + Number(b) + Number(c);
  console.log(sum);
  if (sum <= 10) {
    result.innerHTML = "total: " + sum;
  } else {
    result.innerHTML = "Llevas demasiados golosooo!";
  }
});
//aqui termina el js del trabajo 2
//aqui empieza el js del trabajo 3
const primerDigito = document.getElementById("primer-digito");
const segundoDigito = document.getElementById("segundo-digito");
const tercerDigito = document.getElementById("tercer-digito");
const passBtn = document.getElementById("pass-button");
const passResult = document.getElementById("pass-result");

console.log(primerDigito.value);
console.log(segundoDigito.value);
console.log(tercerDigito.value);
console.log(passBtn);
console.log(passResult);

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
