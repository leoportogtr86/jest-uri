let Funcionario = require('./Funcionario')


let f1 = new Funcionario(25, 100, 5.5)
let f2 = new Funcionario(1, 200, 20.50)
let f3 = new Funcionario(6, 145, 15.55)




it('Deve conferir se o número e salário de um funcionário estão corretos', () => {


    expect(f1.getNumero()).toBe(25)
    expect(f1.getSalario()).toBe(550)
    expect(f2.getNumero()).toBe(1)
    expect(f2.getSalario()).toBe(4100)
    expect(f3.getNumero()).toBe(6)
    expect(f3.getSalario()).toBe(2254.75)



});