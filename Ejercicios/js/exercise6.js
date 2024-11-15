//6. Escribir un programa que escriba en pantalla los divisores de un número dado

const num_usuario = prompt("Ingrese un numero");

let divisores = [];

for(let i = 1; i <= num_usuario; i++){
    if(num_usuario%i === 0){
        divisores.push(i);
    }
}

console.log(`Divisores de ${num_usuario} son: ${divisores.join(', ')}`);
