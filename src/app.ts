import express from "express";
import cors from "cors";
import { Habitat } from "./model/Habitat";
import { Atracao } from "./model/Atracao";
import { Zoologico } from "./model/Zoologico";
import { DatabaseModel } from "./model/DatabaseModel";
import { Reptil } from "./model/Reptil";

const server = express();
const port: number = 3000;

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.json("ola");
});

server.post('/habitat', (req, res) => {
    const { nome, animais } = req.body;
    const habitat = new Habitat(nome, animais);
    console.log(habitat);
    res.status(200).json('Habitat criado');
});

server.post('/atracao', (req, res) => {
    const { nome, habitat } = req.body;
    const atracao = new Atracao(nome, habitat);
    console.log(atracao);
    res.status(200).json('Atração criada');
});

server.post('/zoologico', (req, res) => {
    const { nome, atracao } = req.body;
    const zoo = new Zoologico(nome, atracao);
    console.log(zoo);
    res.status(200).json('Zoológico criado');
});

server.get('/list/reptil', async (req, res) => {
    const repteis = await Reptil.listarRepteis();

    res.status(200).json(repteis);
})

server.post('/new/reptil', async (req, res) => {
    const { nome, idade, genero, tipo_de_escamas } = req.body;

    const novoReptil = new Reptil(nome, idade, genero, tipo_de_escamas);
    console.log('pronto para chamar a função do banco');

    const result = await Reptil.cadastrarReptil(novoReptil);

    if(result) {
        return res.status(200).json('Reptil cadastrado com sucesso');
    } else {
        return res.status(400).json('Não foi possível cadastrar o réptil no banco de dados');
    }
    
})

new DatabaseModel().testeConexao().then((resbd) => {
    if(resbd) {
        server.listen(port, () => {
            console.log(`Servidor rodando em http://localhost:${port}`);
        })
    } else {
        console.log('Não foi possível conectar ao banco de dados');
    }
})
