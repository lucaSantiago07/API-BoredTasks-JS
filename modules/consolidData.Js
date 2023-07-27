
//this function was used for testing possibles match between number of participants and kind of Activity and possibles errors.
//There is no importance for app after the tests.

//let arrayList = ['education','recreational','social','diy','charity','cooking']
const consolid =  async function consolidDataInArray (arrayList) {
    
    let arrayAnswer = []
 
    for (let type = 0;type<arrayList.length;type++) {
        let participantsAvaliable = ''
        let erros = 0
        for (let people = 0;people<10;people++) {
            let show = await boredTasksRequest (`${people}`,`&types=${arrayList[type]}`)
            console.log (show)
            if (!show.error) {
                participantsAvaliable += ` ${people}`
               // console.log (`participantes disponíveis para ${arrayList[type]}: ${people}`)
            }
            else {
                erros++
            }
           // console.log (`Erros do tipo ${arrayList[type]} = ${erros} `)
        }
        arrayAnswer[type] = new Array(2)
        arrayAnswer[type] = [arrayList[type], participantsAvaliable]
    }

    return arrayAnswer
}