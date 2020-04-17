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



let getEmpleados = async(id) => {



    //como el for empleado es el que itera
    let empleadodb = empleados.find(empleado => empleado.id == id);
    if (empleadodb) {
        return empleadodb;
    } else {
        throw new Error(`No existe un empleado con id ${id}`)
    }






}

//////////////////////////////////////////////////////////////7


let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id)
    if (!salarioDB) {
        throw new Error(`no se encontro salario para ${empleado.nombre}`)
    } else {
        return ({ nombre: empleado.nombre, salario: salarioDB.salario })
    }




}

let getInfo = async(id) => {

    let empleado = await getEmpleados(id);
    let resp = await getSalario(empleado);
    return `el salario de ${resp.nombre} es de ${resp.salario}`;

}


getInfo(2).then(mensaje => {
    console.log(mensaje);
}).catch(err => {
    console.log("error", err);
})