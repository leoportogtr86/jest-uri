let segundos
let minutos
let horas

function retornaHoras(totalSegundos) {

    let horas = Math.floor(totalSegundos / 3600)
    let minutos = Math.floor((totalSegundos - (horas * 3600)) / 60)
    let segundos = Math.floor(totalSegundos - (horas * 3600 + minutos * 60))

    return horas + ':' + minutos + ':' + segundos

}

console.log(retornaHoras(140153))