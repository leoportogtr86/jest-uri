module.exports = (a, b, c) => {

    let peso1 = 2
    let peso2 = 3
    let peso3 = 5

    let media = (peso1 * a + peso2 * b + peso3 * c) / (peso1 + peso2 + peso3)

    media = media.toFixed(1)


    return Number(media)


}