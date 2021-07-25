let media = require('./media')



it('Deve retornar a média ponderada entre 3 notas de um aluno', () => {


    let n1 = 5
    let n2 = 6
    let n3 = 7
    let n4 = 5
    let n5 = 10
    let n6 = 10
    let n7 = 10
    let n8 = 10
    let n9 = 5


    expect(media(n1, n2, n3)).toBe(6.3)
    expect(media(n4, n5, n6)).toBe(9.0)
    expect(media(n7, n8, n9)).toBe(7.5)
});