import express from 'express';
import cors from 'cors';

const server = express();
const port = 3000;

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.json('Olá mundo!!');
})

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})
