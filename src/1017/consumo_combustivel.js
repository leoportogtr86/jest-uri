module.exports = (tempo, velocidade_media) => {

    //vm = distancia/tempo
    //distancia = vm/tempo
    let distancia = velocidade_media * tempo
    let combustivel = distancia / 12

    combustivel = parseFloat(combustivel.toFixed(3))

    return combustivel


}