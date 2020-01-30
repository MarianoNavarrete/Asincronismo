/* primero declaramos una variable para la url */
let apiDbz = "http://dragon-ball-api.herokuapp.com/api/character";
/* luego instanciamos la response library */
/* let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; */
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url);
                return callback(error, null);
            }     
        }
    }
    xhttp.send();
}

fetchData(apiDbz, function(error, data){
    if(error){
        return console.log(error);
    }
    console.log(data)
    
});