const request = require('supertest')

const server = require('./server.js');

describe('the route handlers',  ()  =>  {
    describe('get /',   ()  =>  {
        it('responds with 200', async   ()  =>  {
            const response = await request(server).get('/');
            expect(response.status).toBe(200);
        })
        it('responds with json',    async   ()  =>  {
            const response = await request(server).get('/');
            expect(response.type).toBe('application/json');
        })
    });

    describe('post /users', ()  =>  {
        it('responds with 201', async  ()   =>  {
            const body = { username: "Ryan", password: "Test" };
            const response = await request(server).post('/users').send(body);
            expect(response.status).toBe(201);
        } )

        it('responds with 400', async ()    =>  {
            const body = {}
            const response = await request(server).post('/users').send(body);
            expect(response.status).toBe(400);
        })
    })
});
