// Seleccionar los elementos de la pagina - canvas, shake button.
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');


// Configurar nuestro canvas para dibujo

//  Destructuring, de paso guardemos el tamano de nuestro canvas.
const { width, height } = canvas;

// Creamos un punto aleatorio donde empiece el dibujo
let x = Math.floor(Math.random() * width)


ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // Empieza el punto para dibujar
ctx.moveTo(x, 200);
ctx.lineTo(x, 200);
ctx.stroke();



// Escribir una funcion de dibujar



// Escribir un handler para las llaves.



// Una funcion para limpiar.



// Listen las flechas.
