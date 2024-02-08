import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Reptil } from './model/Reptil';
import { Mamifero } from './model/Mamifero';

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

server.post('/ave', (req, res) => {
    const { nome, idade, genero, envergadura } = req.body;
    let ave: Ave = new Ave(nome, idade, genero, envergadura);
    res.json(["A nova ave do zoológico é: ", ave]);
});

// server.post('/animal', (req, res) => {
//     if(req.body && 'raca' in req.body) {
//         // do something
//     } else if(req.body && 'envergadura' in req.body) {
//         // do something
//     } else if(req.body && 'tipo_de_escamas' in req.body) {
//         // do something
//     } else {
//         console.log('Algo errado não está certo.');
//     }
// });

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})
