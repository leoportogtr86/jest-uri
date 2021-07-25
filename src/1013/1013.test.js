const maior = require('./maior.js')




it('Deve retornar o maior entre 3 valores', () => {


    expect(maior(7, 14, 106)).toBe(106)
    expect(maior(217, 14, 6)).toBe(217)

});

