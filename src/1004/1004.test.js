// https://www.urionlinejudge.com.br/judge/pt/problems/view/1004

const produto = require('./produto')


it('Deve retornar o produto entre 2 valores', () => {


    let n1 = 3
    let n2 = 9
    let n3 = -30
    let n4 = 10
    let n5 = 0
    let n6 = 9


    expect(produto(n1, n2)).toBe(27)
    expect(produto(n3, n4)).toBe(-300)
    expect(produto(n5, n6)).toBe(0)



});