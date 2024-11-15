//10. Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se
// determine si el triángulo es válido o no

const anguloA = parseFloat(prompt('Ingrese el primer angulo'));
const anguloB = parseFloat(prompt('Ingrese el segundo angulo'));
const anguloC = parseFloat(prompt('Ingrese el tercer angulo'));

let suma = (anguloA + anguloB + anguloC);
console.log(suma);

if (suma == 180) {
    console.log(`Los angulos ${anguloA}, ${anguloB}, ${anguloC} si corresponden a los angulos internos de un triangulo`);
}else{
    console.log(`Los angulos ${anguloA}, ${anguloB}, ${anguloC} no corresponden a los angulos internos de un triangulo`);
}
