module.exports = (raio) => {

    const PI = 3.14159
    let volume = (4 / 3) * PI * (raio * raio * raio)

    volume = volume.toFixed(3)

    return Number(volume)

}