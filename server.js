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

module.exports = server
