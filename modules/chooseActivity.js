import { boredTasksRequest } from "./ApiRequest.js";
export async function chooseActivity (arrayOfAct, menuApp) {
    class Questions  {
        constructor (answer) {
            this.answer = answer
        }
    }
    let arrayOfQuestion = []
    let secondQuestion
    arrayOfQuestion.push(new Questions(parseInt(prompt('How many people are with you? \n 1, 2, 3, 4, 5, 8'))))
    arrayOfQuestion.push(new Questions(parseInt(prompt(`What would you like to do? \n0 - education;\n 1 - recreational;\n 2 - social;\n 3 - diy;\n 4 - charity;\n 5 - cooking; `) )))
    switch (arrayOfQuestion[1].answer) {
            case 0:
                secondQuestion = '&types=education' 
                break;
            case 1:
                secondQuestion = '&types=recreational'
                break;
            case 2:
                secondQuestion = '&types=social'
                break;
            case 3:
                secondQuestion = '&types=diy'
                break;
            case 4:
                secondQuestion = '&types=charity'
                break;
            case 5:
                secondQuestion = '&types=cooking'
                break;
            default:
                console.log('Opção inválida')
                break;
            }
        const activitySort =  await boredTasksRequest(arrayOfQuestion[0].answer,secondQuestion)
        
        arrayOfAct.push (activitySort)
        console.log (arrayOfAct)
        menuApp (arrayOfAct,identifier = 4)
            return (arrayOfAct)
}
