// module used for Request the API

export async function boredTasksRequest (people,types = '') {
    const dados = fetch(`https://www.boredapi.com/api/activity?participants=${people}${types}`)
    .catch (err => console.log(`Erro: ${err}`))
    .then (data =>  data.json())
    const result = await dados
    return result

}