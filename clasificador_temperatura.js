import inquirer from 'inquirer';

inquirer
    .prompt ([
        {
            type: 'input',
            name: 'temperatura',
            message: '¿Cual es tu temperatura actual?'
        }
    ])
    .then((answers) => {
        let temperatura = Number(answers.temperatura);
        
        if(temperatura < 10) {
            console.log("Hace frio, lleva chaqueta")
        } else if (temperatura >= 10 && temperatura <= 24 ){
            console.log("Clima templado")
        } else if (temperatura > 25) {
            console.log("Hace calor, hidrátate")
        } else {
            console.log("Dato inválido")
        }
    })

    