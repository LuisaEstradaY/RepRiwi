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
        const horas = Number(answers.hora);
        let total = 0;

        if (horas > 0 && answers.coder === 'No' ) {
            total = Math.min(3000 + (horas - 1) * 2000, 20000);
            console.log(`Debes pagar ${total}`)
        }

        else if (answers.coder === 'Si') {
            const descuento = 0.15
            total = Math.min(3000 + (horas - 1) * 2000, 20000);

            total = total - (total * descuento)

            console.log("Debes de pagar: ", total)
        }

    
    })

   