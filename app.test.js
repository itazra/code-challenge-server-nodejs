const request = require('supertest');
const app = require('./app');

jest.setTimeout(100000);

describe('Test Temperature API', () => {

    it("GET /temperature/1 and returns data with id field and temperature field with a numeric value", async ()=> {
        const response = await request(app)
        .get('/temperature/1');

        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('temperature');
        expect(!isNaN((response.body.temperature))).toBe(true);
    });
})