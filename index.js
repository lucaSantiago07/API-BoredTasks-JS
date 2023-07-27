import { boredTasksRequest } from "./modules/ApiRequest.js";
import { chooseActivity } from "./modules/chooseActivity.js";

//participants=...
//&types=...


let arrayOfActivities = []

menu()

function menu (arrays, identifier = 3) {
    console.log (identifier)
    let choice = parseInt(prompt('O que deseja fazer?\n1-Verificar atividades Salvas\n2-Sortear nova atividade\n3-Excluir todas as atividades salvas\n4-Salvar atividades atuais\n5-Sair do programa'))
   if (choice == 1) {
    const saveActivities = JSON.parse(localStorage.getItem(('Activities')))
    let answer = ''
    for (let i = 0;i<saveActivities.length;i++) {
        answer += `Atividade ${i+1} = ${saveActivities[i].activity}, Participantes: ${saveActivities[i].participants}\n`
    }
    alert(answer)
    console.log (saveActivities[0].activity)

   }
    else if (choice == 2) {
    chooseActivity (arrayOfActivities, menu)
   }
   else if (choice == 3) {
     }
   else if (choice == 4) {
        localStorage.setItem('Activities', JSON.stringify(arrays))
   }
   else if (choice == 5){
       let answer = ''
       for (let i = 0; i<arrays.length;i++) {
           answer += `Atividade ${i+1} = ${arrays[i].activity}, Participantes: ${arrays[i].participants}\n`
           
       }
       alert (answer)
       }
   else {
       alert ('Opção inválida. Atualize e tente novamente.')
       location.reload
   }
}

