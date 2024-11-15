/*22. Dado el array = [1,2,3,4,5,6]
a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en
pantalla.
b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
pantalla.
c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos
en pantalla.
d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
e. Generar una copia de un array pero con todos los elementos incrementados en 1.
f. Calcular el promedio*/

let array = [1,2,3,4,5,6];

// a)
console.log(('----------'));
i= 0;

while (i<=5) {
    console.log(array[i]);
    i++;
}

// b)
console.log(('----------'));
for(let i=0; i<6; i++){
    console.log(array[i]);
}

//c)
console.log(('----------'));
array.forEach(numero => {
    console.log(numero);
});

// d)
console.log(('----------'));
i=0;
do {
    console.log(array[i]+1);
    i++;
} while (i<array.length);

// e)
console.log(('----------'));
let array2 = array.map(numero => numero + 1);
console.log(array2);

// f)
console.log(('----------'));
let suma = array.reduce((acum, i) => acum + i, 0);
let promedio = suma / array.length;

console.log(`El promedio del array inciso (d) es igual a: ${promedio}`);


