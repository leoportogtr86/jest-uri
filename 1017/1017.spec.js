const consumo = require('./consumo_combustivel')



describe('Problema 1017 uri online judge', () => {
    it('Deve garantir que o retorno do combustível gasto esteja correto', () => {

        expect(consumo(10, 85)).toBe(70.833)
        expect(consumo(2, 92)).toBe(15.333)
        expect(consumo(22, 67)).toBe(122.833)

    });
});