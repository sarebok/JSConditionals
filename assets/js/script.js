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
    result.innerHTML = "total: " + Number(sum);
  } else {
    result.innerHTML = "Llevas demasiados golosooo!";
  }
});
