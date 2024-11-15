/*21. Crear una función que reciba un número entero y muestre un error si el tipo de dato
pasado es de otro tipo.*/

function num_entero(num) {
    if(typeof num !== 'number'){
        console.log('Warning: Error! El dato no es un numero');
        return;
    }
    if (!Number.isInteger(num)) {
        console.log('Error! El numero no es un entero');
        return;
    }

    console.log(`${num} es un numero entero valido`);
    
}

const numero = 4;
// const numero = 4.1;
// const numero = '4';
num_entero(numero);