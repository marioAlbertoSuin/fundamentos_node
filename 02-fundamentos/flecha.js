/* forma avitual 

function sumar(a, b) {
    return a + b;
}

*/
//flecha/////////////////////////////////////////////////

let sumar = (a, b) => a + b;


let saludar = (nombre) => `hola chicos ${nombre}`;

console.log(`la suma de 3 + 3 = ${sumar(3,4)}`);

console.log(`${saludar("mario")}`);


let flecha = () => {
    let a = "mario";
    let b = "alberto "
    return `hola ${a}   ${b}`;
}


console.log(`${flecha()}`);


///////////////////////////////////////////

let deadpool = {
    nombre: 'wade',
    apellido: 'wilson',
    poder: 'regeneracion',
    getNombre: () => {
        return ` ${deadpool.nombre} ${deadpool.apellido} - poder ${deadpool.poder}`;
    }
}



console.log(deadpool.getNombre());