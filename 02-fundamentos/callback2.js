let empleados = [{
        id: 1,
        nombre: "santiago"
    },
    {
        id: 2,
        nombre: "wendy"
    },
    {
        id: 3,
        nombre: "leo"
    }

];

let salarios = [{
        id: 1,
        salario: 800
    },
    {
        id: 2,
        salario: 950
    }
];



let getEmpleados = (id, callback) => {
    //como el for empleado es el que itera
    let empleadodb = empleados.find(empleado => empleado.id == id);
    if (empleadodb) {
        callback(null, empleadodb);
    } else {
        callback("usuario no ingresado")
    }


}



/////////////////////////////////////////////////////7






let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)
    if (!salarioDB) {
        callback(`no se encontro salario para ${empleado.nombre}`)
    } else {
        callback(null, { nombre: empleado.nombre, salario: salarioDB.salario })
    }



}


////////////////////////////////////////////////////////




getEmpleados(3, (err, empleado) => {
    if (err) {
        return console.log(err)
    }

    getSalario(empleado, (err, respuesta) => {
        if (err) {
            return console.log(err)
        }
        console.log(respuesta);
    });





});