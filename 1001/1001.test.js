// https://www.urionlinejudge.com.br/judge/pt/problems/view/1001
const soma = require('./soma')


it('Deve retornar a soma entre 2 números', () => {

    const n1 = 10
    const n2 = 9
    const n3 = -10
    const n4 = 4
    const n5 = 15
    const n6 = -7


    expect(soma(n1, n2)).toBe(19)
    expect(soma(n3, n4)).toBe(-6)
    expect(soma(n5, n6)).toBe(8)

});