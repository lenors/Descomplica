// Math.random()
function aleatorio() {
  const number = 10;
  document.getElementById("resultado").innerHTML = Math.floor(
    Math.random() * number
  );
}

// Math.min()
function minimo() {
  document.getElementById("resultado").innerHTML = Math.min(
    1,
    -5,
    10,
    15,
    20,
    25
  );
}

// Math.max()
function maximo() {
  document.getElementById("resultado").innerHTML = Math.max(
    1,
    5,
    10,
    15,
    20,
    -25
  );
}

// Math.pow()
function potencia() {
  const num1 = 10;
  const num2 = 2;
  document.getElementById("resultado").innerHTML = Math.pow(num1, num2);
}


let x = 4;
let y = 9;

//Calculando o cosseno de X
let cosX = math.cos(x);
console.log(`O maximo entre ${x} e ${cosX}`);

//Encontrando o maximo entre x e y
let maxXY = math.max(x, y);
console.log(`O maximo entre ${x} e ${y} é ${maxXY}`);

//Encontrando o minimo entre x y
let minXY = math.min(x, y);
console.log(`O minimo entre ${x} e ${y} é ${minXY}`)

//Elevando x ao quadrado
let powX = math.pow(x, 2);
console.log(`${x} elevando ao quadrado é ${powX}`)
