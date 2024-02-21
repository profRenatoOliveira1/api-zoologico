import { globalAgent } from "http";
import { Animal } from "./Animal";
import { DatabaseModel } from "./DatabaseModel";

const database = new DatabaseModel().pool;

/**
 * Representa um réptil no zoológico, que é uma subclasse de Animal.
 */
export class Reptil extends Animal {
    /**
     * O tipo de escamas do réptil.
     */
    private tipo_escamas: string;

    /**
     * Cria uma nova instância de Reptil.
     * 
     * @param _nome O nome do réptil.
     * @param _idade A idade do réptil.
     * @param _genero O gênero do réptil.
     * @param _tipo_escamas O tipo de escamas do réptil.
     */
    constructor(_nome: string, 
                _idade: number, 
                _genero: string, 
                _tipo_escamas: string) {
        super(_nome, _idade, _genero);
        this.tipo_escamas = _tipo_escamas;
    }

    /**
     * Obtém o tipo de escamas do réptil.
     * 
     * @returns O tipo de escamas do réptil.
     */
    public getTipoEscamas(): string {
        return this.tipo_escamas;
    }

    /**
     * Define o tipo de escamas do réptil.
     * 
     * @param _tipo_escamas O tipo de escamas a ser atribuído ao réptil.
     */
    public setTipoEscamas(_tipo_escamas: string): void {
        this.tipo_escamas = _tipo_escamas;
    }

    static async listarRepteis() {
        const listaDeRepteis: Array<Reptil> = [];
        try {
            const queryReturn = await database.query(`SELECT * FROM  reptil`);
            queryReturn.rows.forEach(reptil => {
                listaDeRepteis.push(reptil);
            });

            // só pra testar se a lista veio certa do banco
            console.log(listaDeRepteis);

            return listaDeRepteis;
        } catch (error) {
            console.log('Erro no modelo');
            console.log(error);
            return "error";
        }
    }

    static async cadastrarReptil(reptil: Reptil): Promise<any> {
        console.log('Começando o cadastro');
        try {
            let insertResult = false;
            await database.query(`INSERT INTO reptil (nome, idade, genero, tipo_de_escamas)
                VALUES
                ('${reptil.getNome().toUpperCase()}', ${reptil.getIdade()}, '${reptil.getGenero().toUpperCase()}', '${reptil.getTipoEscamas().toUpperCase()}');
            `).then((result) => {
                if(result.rowCount != 0) {
                    insertResult = true;
                }
            });
            console.log('retornando a função');
            return insertResult;
        } catch(error) {
            console.log('algo errado não está certo');
            return error;
        }
    }
}
