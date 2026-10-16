import inquirer from 'inquirer';

inquirer
    .prompt([
        {
            type: 'input',
            name: 'n',
            message: 'Ingrese su numero'
        }
    ])
    .then((answers) => {
        let n = Number(answers.n);
        if(n <= 0){
            console.log("Numero no válido")
        } else if (n >= 1){
            for(let i = 1; i >= 1; i++)
            console.log(i);    
        } else {
            console.log("Número no válido")
        } 

    })