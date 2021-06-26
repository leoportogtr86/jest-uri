let Vendedor = require('./Vendedor.js')

let v1 = new Vendedor('JOAO', 500.00, 1230.30)
let v2 = new Vendedor('PEDRO', 700.00, 0.00)
let v3 = new Vendedor('MANGOJATA', 1700, 1230.50)



it('Deve verificar o retorno da função de salário de um funcionário', () => {


    expect(v1.getTotal()).toBe(684.54)
    expect(v2.getTotal()).toBe(700.00)
    expect(v3.getTotal()).toBe(1884.58)

});