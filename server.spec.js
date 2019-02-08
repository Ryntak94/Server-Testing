const request = require('supertest')

const server = require('./server.js');

describe('the route handlers',  ()  =>  {
    describe('get /',   ()  =>  {
        it('responds with 200', async   ()  =>  {
            const response = await request(server).get('/');
            expect(response.status).toBe(200);
        })
        it('respons with json',    async   ()  =>  {
            const response = await request(server).get('/');
            expect(response.type).toBe('application/json');
        })
    });
});
