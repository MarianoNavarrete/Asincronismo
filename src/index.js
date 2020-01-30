console.log("hola");
function sumar(num1, num2) {
    return num1 + num2;
}

function presentar(num1, num2, callback){
    return (`El resultado de la suma es ${callback(num1,num2)}`);
}

console.log(presentar(2,4,sumar));