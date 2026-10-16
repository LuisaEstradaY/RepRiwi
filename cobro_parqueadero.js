import inquirer from "inquirer";

inquirer
    .prompt([
        {
            type: 'input',
            name: 'hora',
            message: '¿Cuantás horas duraste en el parqueadero?'
        },
          {
            type: 'select',
            name: 'coder',
            message: '¿Eres coder de Riwi?',
            choices: ['Si', 'No']
        }
    ])
    .then((answers) => {
        let hora = (answers.hora);

        if (hora = 1){
            console.log("Debes pagar 3.000")
        } else if (hola) {
            console.log
        }
    
    })
