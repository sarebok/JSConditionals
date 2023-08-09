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
