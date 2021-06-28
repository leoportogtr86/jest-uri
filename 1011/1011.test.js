const volumeEsfera = require('./volumeEsfera.js')

let r1 = 3
let r2 = 15
let r3 = 1523



it('Deve retornar o volume de uma esfera', () => {

    expect(volumeEsfera(r1)).toBe(113.097)
    expect(volumeEsfera(r2)).toBe(14137.155)
    expect(volumeEsfera(r3)).toBe(14797486501.627)

});