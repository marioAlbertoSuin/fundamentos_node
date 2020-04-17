let deadpool = {
    nombre: 'wade',
    apellido: 'wilson',
    poder: 'regeneracion',
    getNombre: function() {
        return ` ${this.nombre} ${this.apellido} - poder ${this.poder}`;
    }
}

//opcion 1

console.log(deadpool.getNombre());
let nom = deadpool.nombre;


// Op 2 destructuracion 

let { nombre: primernombre, apellido: ape, poder } = deadpool;
console.log(primernombre, " ", ape);