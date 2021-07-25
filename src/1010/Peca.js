class Peca {

    constructor(codigo, numero_pecas, peca_preco) {

        this.codigo = codigo
        this.numero_pecas = numero_pecas
        this.peca_preco = peca_preco
    }

    static somaPecas(p1, p2) {

        let soma = p1.getTotal() + p2.getTotal()
        soma = soma.toFixed(2)

        return Number(soma)


    }


    getTotal() {

        let total = (this.numero_pecas * this.peca_preco)
        total = total.toFixed(2)

        return Number(total)
    }
}


module.exports = Peca