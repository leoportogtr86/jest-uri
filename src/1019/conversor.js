module.exports = (totalSegundos) => {

    //1 hr => 3600
    //1 min => 60

    let segundos
    let minutos
    let horas
    let resultado

    horas = Math.floor(totalSegundos / 3600)
    minutos = Math.floor((totalSegundos - (horas * 3600)) / 60)
    segundos = Math.floor(totalSegundos - (horas * 3600 + minutos * 60))

    resultado = `${horas}:${minutos}:${segundos}`

    return resultado

}