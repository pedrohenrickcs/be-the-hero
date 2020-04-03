const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connections');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.latest();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs').send({
            name: "APAD3",
            email: "contasdfdsfto@apad.com.br",
            whatsapp: "1199999999",
            city: "Sao Paulo",
            uf: "SP"
        });

        console.log(response.body);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});