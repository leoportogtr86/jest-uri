let contaCedulas = require('./contaCedulas')



describe('Problema 1018 uri online judge', () => {

    it('Deve retornar a quantidade de cédulas certas', () => {

        expect(contaCedulas(576)).toEqual({

            num1: 5,
            num2: 1,
            num3: 1,
            num4: 0,
            num5: 1,
            num6: 0,
            num7: 1

        })

        expect(contaCedulas(11257)).toEqual({

            num1: 112,
            num2: 1,
            num3: 0,
            num4: 0,
            num5: 1,
            num6: 1,
            num7: 0

        })

        expect(contaCedulas(503)).toEqual({

            num1: 5,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0,
            num6: 1,
            num7: 1

        })

    });
});
