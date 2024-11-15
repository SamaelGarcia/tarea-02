/*25. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si
un color introducido por el usuario a través de un prompt se encuentra dentro del array o
no.*/
let colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
let color_usuario = prompt("Ingrese un color: ");
    if (colores.includes(color_usuario)) {
        console.log(`El color ${color_usuario} si se encuentra en el array`);
    } else {
        console.log(`El color ${color_usuario} no se encuentra en el array`);
        console.log(colores);
    }
