const distanciaEntrePontos = require('./distanciaEntrePontos.js')



it('Deve retornar a distância entre dois pontos dadas suas coordenadas', () => {

    expect(distanciaEntrePontos(1, 7, 5, 9)).toBe(4.4721)
    expect(distanciaEntrePontos(-2.5, 0.4, 12.1, 7.3)).toBe(16.1484)
    expect(distanciaEntrePontos(2.5, -0.4, -12.2, 7)).toBe(16.4575)

});