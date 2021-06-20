const { msg } = require('./1000')



it('Deve retornar "Hello World!"', () => {

    expect(msg()).toBe('Hello World!')
});