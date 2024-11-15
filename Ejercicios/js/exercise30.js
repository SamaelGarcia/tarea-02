/*30. Crear una función que tome como parámetro un arreglo de números, retornar el número
menor, si es un número negativo mostrar su valor absoluto.*/

function Numero_Menor(array){
    if (array.length === 0) {
        return null;
    }
    let menor = Math.min(...array);
    if (menor<0) {
        console.log(`El numero menor es negativo: ${menor}`);
    }else{
        console.log(`EL numero menor es positivo: ${menor}`);
    }
    console.log(`${menor} es el numero menor`);
    return Math.abs(menor);
}


let arreglo = [-5, 10, 3, -8, 9];
let valorAbsoluto = Numero_Menor(arreglo);
console.log(`Valor absoluto es: ${valorAbsoluto}`);
