const promessa = new Promise((resolve, reject) => {
     setTimeout(() => resolve('Operação concluída!'), 2000); 
    }); 
    promessa.then(resultado => console.log(resultado))