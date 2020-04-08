const express = require('express');// imports express
const postRouter = require('./data/routes.js');// import router file
const server = express();



server.use(express.json());

server.use('/api/posts', postRouter);// path that router will use


const PORT = 5003;
server.listen(PORT, () => {
    console.log(`\n *** Server is up on http://localhost:${PORT} `)
}); 



