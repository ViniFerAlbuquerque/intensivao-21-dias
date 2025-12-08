let promessa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Sucesso!'), 2000) 
}) 
promessa.then(result => console.log(result))
