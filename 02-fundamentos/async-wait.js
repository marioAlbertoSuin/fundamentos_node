//retornar una promesa
/*
let getNOmbre = async() => {
        throw new Error("no hay el usuario en la base de datos"); //despues de esto el odigo no se ejecuts
        return "Mario";
    }
    ////////////////////////////

*/
let getNOmbre = () => {
        return new Promise((resolve, rejects) => {
            setTimeout(() => {
                resolve("mario");
            }, 3000)
        })
    }
    //////////////////////////////////
    //await simpre toma el resolve

let saludo = async() => {
    let nombre = await getNOmbre();
    return `hola ${nombre}`;
}

/////////////////////
saludo().then(mensaje => {
    console.log(mensaje);
}).catch(err => {
    console.log("error en el saludo");
})



//////////////////////



//console.log(getNOmbre());
/*
getNOmbre().then(nombre => {
    console.log(nombre);
}).catch(err => {
    console.log("error en el async", err);
})
*/