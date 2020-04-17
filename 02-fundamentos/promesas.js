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



let getEmpleados = (id) => {

    return new Promise((resolve, reject) => {

        //como el for empleado es el que itera
        let empleadodb = empleados.find(empleado => empleado.id == id);
        if (empleadodb) {
            resolve(empleadodb);
        } else {
            reject("usuario no ingresado")
        }


    });



}

//////////////////////////////////////////////////////////////7


let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)
        if (!salarioDB) {
            reject(`no se encontro salario para ${empleado.nombre}`)
        } else {
            resolve({ nombre: empleado.nombre, salario: salarioDB.salario })
        }


    });

}



///////////////////////////////////////////////////////////////


getEmpleados(1).then(empleado => {
    // console.log("empleado de BD", empleado);
    getSalario(empleado).then(resp => {
        console.log(resp);
    }, (err) => {
        console.log(err);
    });
}, (err) => {
    console.log(err);
});


////////promesas en cadena
/*
getEmpleados(1).then(empleado => {
    return getSalario(empleado);
}).then(resp => {
    console.log(resp);
}).catch(err => {
    console.log(err);
});
*/