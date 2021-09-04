module.exports = (valor) => {

    let numero_cedulas_100 = Math.floor((valor / 100))
    valor = valor - numero_cedulas_100 * 100

    let numero_cedulas_50 = Math.floor((valor / 50))
    valor = valor - numero_cedulas_50 * 50

    let numero_cedulas_20 = Math.floor((valor / 20))
    valor = valor - numero_cedulas_20 * 20

    let numero_cedulas_10 = Math.floor((valor / 10))
    valor = valor - numero_cedulas_10 * 10

    let numero_cedulas_5 = Math.floor((valor / 5))
    valor = valor - numero_cedulas_5 * 5

    let numero_cedulas_2 = Math.floor((valor / 2))
    valor = valor - numero_cedulas_2 * 2

    let numero_cedulas_1 = Math.floor((valor / 1))
    valor = valor - numero_cedulas_1 * 1

    let valores = {

        num1: numero_cedulas_100,
        num2: numero_cedulas_50,
        num3: numero_cedulas_20,
        num4: numero_cedulas_10,
        num5: numero_cedulas_5,
        num6: numero_cedulas_2,
        num7: numero_cedulas_1

    }

    return valores

}

