/*19. Usando for, crear un programa que determine si un número es perfecto o no, (se dice
que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3)*/

console.log("Inicio");

function Perfect_Number(num) {
    let divisores = 0;
    
    for(let i = 0; i < num; i++){
        if(num%i == 0){
        divisores += i;
        }
    }

    if(divisores === num){
        return true;
    }else{
        return false;
    }
}



const numero = 6;
if(Perfect_Number(numero)){
    console.log(`${numero}, cumple las condiciones de un numero perfecto.`);
}else{
    console.log(`${numero}, no cumple con las condiciones de numero perfecto`);
}
console.log("Fin");
