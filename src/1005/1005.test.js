// https://www.urionlinejudge.com.br/judge/pt/problems/view/1005
const media = require('./media')


it('Deve retornar a média ponderada das notas de um aluno', () => {


    let n1 = 5
    let n2 = 7.1
    let n3 = 0
    let n4 = 7.1
    let n5 = 10
    let n6 = 10

    expect(media(n1, n2)).toBe(6.43182)
    expect(media(n3, n4)).toBe(4.84091)
    expect(media(n5, n6)).toBe(10.00000)


});