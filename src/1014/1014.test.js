const consumoMedio = require('./consumoMedio.js')


it('Deve retornar o consumo médio de combustível de um carro', () => {

    expect(consumoMedio(500, 35)).toBe(14.286)
    expect(consumoMedio(2254, 124.4)).toBe(18.119)
    expect(consumoMedio(4554, 464.6)).toBe(9.802)

});