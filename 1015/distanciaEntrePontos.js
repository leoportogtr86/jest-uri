module.exports = (x1, y1, x2, y2) => {

    let distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))

    distancia = distancia.toFixed(4)

    return Number(distancia)


}