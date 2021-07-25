class Funcionario {


    constructor(numero, horas_trabalhadas, valor_hora) {

        this.numero = numero
        this.horas_trabalhadas = horas_trabalhadas
        this.valor_hora = valor_hora
    }


    getNumero() {


        return this.numero
    }

    getSalario() {


        return this.horas_trabalhadas * this.valor_hora

    }

}


module.exports = Funcionario