module.exports = (n1, n2) => {


    const peso1 = 3.5
    const peso2 = 7.5

    let media = (n1 * peso1 + n2 * peso2) / (peso1 + peso2)
    media = media.toFixed(5)


    return Number(media)

}