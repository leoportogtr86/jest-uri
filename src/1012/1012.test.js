const Area = require('./Area')

let n1 = 3.0
let n2 = 4.0
let n3 = 5.2
let n4 = 12.7
let n5 = 10.4
let n6 = 15.2



it('Deve retornar os valores das áreas das figuras corretamente', () => {


    expect(Area.getAreaTriangulo(n1, n3)).toBe(7.800)
    expect(Area.getAreaCirculo(n3)).toBe(84.949)
    expect(Area.getAreaTrapezio(n1, n2, n3)).toBe(18.200)
    expect(Area.getAreaQuadrado(n2)).toBe(16.000)
    expect(Area.getAreaRetangulo(n1, n2)).toBe(12.000)

    expect(Area.getAreaTriangulo(n4, n6)).toBe(96.520)
    expect(Area.getAreaCirculo(n6)).toBe(725.833)
    expect(Area.getAreaTrapezio(n4, n5, n6)).toBe(175.560)
    expect(Area.getAreaQuadrado(n5)).toBe(108.160)
    expect(Area.getAreaRetangulo(n4, n5)).toBe(132.080)


});
