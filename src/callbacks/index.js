
function sumar(num1, num2) {
    return num1 + num2;
}

function presentar(num1, num2, callback){
    return (`El resultado de la suma es ${callback(num1,num2)}`);
}

console.log(presentar(2,4,sumar));

function date(callback){
    console.log(new Date)
    setTimeout(function(){
        let date = new Date;
        callback(date)
    }, 4000);
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);

function Verify(password) {
    var result = false;
    if(password === 123){
        result =true;
    }
    return result;
}

function Comprove(password, callback){
    if(callback(password)){
        console.log('Acceso permitido');
    } else {
        console.log('Acceso denegado');
    }
}

Comprove(123,Verify)

