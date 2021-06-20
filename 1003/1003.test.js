// https://www.urionlinejudge.com.br/judge/pt/problems/view/1003
const soma = require('./soma')



it('Deve retornar a soma entre 2 números', () => {


    let n1 = 30
    let n2 = 10
    let n3 = -30
    let n4 = 10
    let n5 = 0
    let n6 = 0


    expect(soma(n1, n2)).toBe(40)
    expect(soma(n3, n4)).toBe(-20)
    expect(soma(n5, n6)).toBe(0)



});