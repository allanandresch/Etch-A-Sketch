// Seleccionar los elementos de la pagina - canvas, shake button.
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 50;


// Configurar nuestro canvas para dibujo

//  Destructuring, de paso guardemos el tamano de nuestro canvas.
const { width, height } = canvas;

// Creamos un punto aleatorio donde empiece el dibujo
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);


ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.beginPath(); // Empieza el punto para dibujar
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();


// Escribir una funcion de dibujar, esto lleva destructuring
function draw({ key }) {

    //Linda arcoiris
    hue += 10;
    ctx.strokeStyle = `hsl(${Math.random() * 360},100%,50%)`;
    console.log(key);

    // Empieza el camino
    ctx.beginPath();
    ctx.moveTo(x, y);
    // Mover nuestra x y dependiendo de los valores que el usuario hizo.
    switch (key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT
            break;
        default:
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

// Escribir un handler para las flechas.
function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key });

    }
}


// Una funcion para limpiar.

function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', function () {
        canvas.classList.remove('shake');
    }, { once: true });

};


// Escuchar las flechas.
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);
