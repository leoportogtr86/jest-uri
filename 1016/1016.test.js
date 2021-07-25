const distancia = require('./distancia')



describe('Problema 1016 uri online judge', () => {

    it('Deve garantir que o retorno da função seja o dobro do parâmetro', () => {

        expect(distancia(30)).toBe(60)
        expect(distancia(110)).toBe(220)
        expect(distancia(7)).toBe(14)

    });

});