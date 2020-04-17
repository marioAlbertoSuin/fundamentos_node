//funciones que se ejuctan despues de que suseda halgo como disparadores
/*
setTimeout(() => {
    console.log("holachicos");
}, 3000);


*/

let getUsuario = (id, callback) => {
    let usuario = {
        nombre: "mario",
        id
    }
    if (id == 20) {
        callback(`El usuario con el id ${id} no existe `);
    } else {
        callback(null, usuario);
    }


}



getUsuario(10, (err, usuario) => {

    if (err) {
        return console.log(err);
    }
    console.log("usuario de la BD ", usuario);
});