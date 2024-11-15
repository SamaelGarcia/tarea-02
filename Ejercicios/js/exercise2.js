//2. Escriba un programa que pida 3 números y escriba en la consola el mayor de los tres

const primero = prompt("Ingrese el primer numero");
const segundo = prompt("Ingrese el segundo numero");
const tercero = prompt("Ingrese el tercer numero");

if (primero > segundo && primero > tercero) {
    console.log(`El primer numero es el mayor: ${primero}`);
}else if (segundo > primero && segundo > tercero) {
    console.log(`El segundo numero es el mayor: ${segundo}`);
}else{
    console.log(`El tercer numero es el mayor: ${tercero}`);
}