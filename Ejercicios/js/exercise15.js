/*15. Usando while mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo
ingresa el usuario en un prompt.
 */

const num_usuario = parseFloat(prompt('Ingrese el valor superior N'));

let i= num_usuario;

while (i>=0) {
    console.log(i);
    i--;
}