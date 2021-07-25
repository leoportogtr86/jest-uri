class Area {


    static getAreaTriangulo(base, altura) {


        let area = (base * altura) / 2
        area = area.toFixed(3)

        return Number(area)

    }

    static getAreaCirculo(raio) {


        let area = 3.14159 * (raio * raio)
        area = area.toFixed(3)

        return Number(area)


    }

    static getAreaTrapezio(a, b, c) {

        let area = ((a + b) / 2) * c
        area = area.toFixed(3)

        return Number(area)


    }

    static getAreaQuadrado(b) {

        let area = b * b
        area = area.toFixed(3)

        return Number(area)


    }

    static getAreaRetangulo(a, b) {


        let area = a * b
        area = area.toFixed(3)

        return Number(area)


    }





}


module.exports = Area