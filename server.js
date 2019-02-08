const express = require('express');
const server = express();
const parser = express.json();
const PORT = "4000";
const dbConfig = require('./knexfile');
const knex = require('knex');
const db = knex(dbConfig.development);
server.use(express.json());

// server.listen(PORT, ()  =>  {
//     console.log("server listening");
// })

server.get('/', async   (req, res)  =>  {
    const users = await db('users');
    res.status(200).json({users});
})

server.post('/users', async (req, res)  =>  {
    const user = req.body;
    if(user.username && user.password)  {
        const users = await db('users').insert(user);
        res.status(201).json(users);
    }   else {
        res.status(400).json({error: 'no username or password'});
    }
})

server.delete('/users', async   (req, res)  =>  {
    const user = req.body;
    if(user.username)    {
        const response = await db('users').delete(user);
        res.status(202).json(response);
    }   else {
        res.status(404).json({error: 'could not find user'});
    }
})

module.exports = server
