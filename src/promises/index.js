const sometimesWillHappen = () => {
    //primer argumento si se ejecutra
    //segundo argumento si es rechazada
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Esta correcto');
        } else {
            reject('No se resolvio');
        }
    });
};

sometimesWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err));

const sometimesWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(()=>{
                resolve('true');
            }, 2000);
        } else {
            const error = new Error('Algo salio mal');
            reject(error);
        }
    });
};

sometimesWillHappen2()
.then((response) => console.log(response))
.catch(error => console.log(error));

Promise.all([sometimesWillHappen(), sometimesWillHappen2()])
.then(response => {
    console.log('Resultado de los arrays: ', response);
})
.catch(err => {
    console.log(err);
});
