// https://www.urionlinejudge.com.br/judge/pt/problems/view/1002
const areaCirculo = require('./areaCirculo')



it('Deve retornar a área do círculo', () => {


    let r1 = 2
    let r2 = 100.64
    let r3 = 150

    expect(areaCirculo(r1)).toBe(12.5664)
    expect(areaCirculo(r2)).toBe(31819.3103)
    expect(areaCirculo(r3)).toBe(70685.7750)


});


