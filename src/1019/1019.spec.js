const conversor = require('./conversor')



describe('Teste do problema 1019', () => {

    it('Deve retornar o valor convertido de segundos no padrão horas:minutos:segundos', () => {

        expect(conversor(556)).toBe('0:9:16')
        expect(conversor(1)).toBe('0:0:1')
        expect(conversor(140153)).toBe('38:55:53')

    });

});