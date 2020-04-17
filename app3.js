console.log("Inicio del programa ");
//time out funciones quese ejecutan desues de un tiempo dado
setTimeout(function() {
    console.log("1");
}, 3000);
setTimeout(function() {
    console.log("2");
}, 0);
setTimeout(function() {
    console.log("3");
}, 0);

console.log("Fin del programa")