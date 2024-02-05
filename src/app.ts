import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Reptil } from './model/Reptil';
import { Mamifero } from './model/Mamifero';
import { Animal } from './model/Animal';

const server = express();
const port = 3000;

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    let ave: Ave = new Ave('Papagaio', 30, 'Macho', 10);
    let reptil: Reptil = new Reptil('Lagarto', 2, 'Femea', 'Cicloides');
    let mamifero: Mamifero = new Mamifero('Doberman', 'Cachorro', 102, 'Femea');
    res.json([ave, reptil, mamifero]);
})

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})
