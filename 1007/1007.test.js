


const valores = {

    v1: 5,
    v2: 6,
    v3: 7,
    v4: 8,
    v5: 0,
    v6: 0,
    v7: 7,
    v8: 8,
    v9: 5,
    v10: 6,
    v11: -7,
    v12: 8,
    r1: -26,
    r2: -56,
    r3: 86
}

it('Deve retornar a diferença entre dois produtos', () => {

    expect((valores.v1 * valores.v2) - (valores.v3 * valores.v4)).toBe(valores.r1)
    expect((valores.v5 * valores.v6) - (valores.v7 * valores.v8)).toBe(valores.r2)
    expect((valores.v9 * valores.v10) - (valores.v11 * valores.v12)).toBe(valores.r3)

});
