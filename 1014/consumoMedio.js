module.exports = (distancia_percorrida, combustivel_gasto) => {

    let consumoMedio = distancia_percorrida / combustivel_gasto
    consumoMedio = consumoMedio.toFixed(3)


    return Number(consumoMedio)
}