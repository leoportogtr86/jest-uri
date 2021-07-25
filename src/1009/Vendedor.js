class Vendedor {


    constructor(nome, salario_fixo, total_vendas) {

        this.nome = nome
        this.salario_fixo = salario_fixo
        this.total_vendas = total_vendas
    }

    getTotal() {

        let total = (this.salario_fixo + 15 / 100 * this.total_vendas).toFixed(2)


        return Number(total)

    }
}

module.exports = Vendedor