const Peca = require('./Peca.js')


let p1 = new Peca(12, 1, 5.30)
let p2 = new Peca(16, 2, 5.10)
let p3 = new Peca(13, 2, 15.30)
let p4 = new Peca(161, 4, 5.20)
let p5 = new Peca(1, 1, 15.10)
let p6 = new Peca(2, 1, 15.10)




it('Deve retornar o valor correto a se pagar pelas peças', () => {

    expect(Peca.somaPecas(p1, p2)).toBe(15.50)
    expect(Peca.somaPecas(p3, p4)).toBe(51.40)
    expect(Peca.somaPecas(p5, p6)).toBe(30.20)

});