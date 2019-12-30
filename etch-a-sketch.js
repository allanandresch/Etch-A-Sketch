// Seleccionar los elementos de la pagina - canvas, shake button.
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');


// Configurar nuestro canvas para dibujo

//  Destructuring, de paso guardemos el tamano de nuestro canvas.
const { width, height } = canvas;

// Creamos un punto aleatorio donde empiece el dibujo
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);


ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // Empieza el punto para dibujar
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();


// Escribir una funcion de dibujar, esto lleva destructuring
function draw({ key }) {
    console.log(key);
}


// Escribir un handler para las flechas.
function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key });

    }
}


// Una funcion para limpiar.



// Escuchar las flechas.
window.addEventListener('keydown', handleKey);
