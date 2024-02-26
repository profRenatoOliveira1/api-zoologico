import { Animal } from "./Animal";
import { DatabaseModel } from "./DatabaseModel";

/**
 * Pool de conexão do banco de dados
 */
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

    /**
     * Retorna uma lista com todos os répteis cadastrados no banco de dados
     * 
     * @returns Lista com todos os répteis cadastrados no banco de dados
     */
    static async listarRepteis() {
        // Cria uma lista (array) vazia do tipo Réptil
        const listaDeRepteis: Array<Reptil> = [];
        try {
            // Faz a consulta no banco de dados e retorna o resultado para a variável queryReturn
            const queryReturn = await database.query(`SELECT * FROM  reptil`);
            // Percorre todas as linhas da queryReturn e acessa cada objeto individualmente
            queryReturn.rows.forEach(reptil => {
                // Coloca o objeto dentro da lista de répteis
                listaDeRepteis.push(reptil);
            });

            // só pra testar se a lista veio certa do banco
            console.log(listaDeRepteis);

            // retorna a lista de mamiferos para quem chamou a função
            return listaDeRepteis;
        } catch (error) {
            // Caso dê algum erro na query do banco, é lançado o erro para quem chamou a função
            console.log('Erro no modelo');
            console.log(error);
            return "error";
        }
    }

    /**
     * Cadastra um objeto do tipo Reptil no banco de dados
     * 
     * @param reptil Objeto do tipo Reptil
     * @returns **true** caso sucesso, **false** caso erro
     */
    static async cadastrarReptil(reptil: Reptil): Promise<any> {
        try {
            // Cria uma variável do tipo booleano para guardar o status do resultado da query
            let insertResult = false;
            // Faz a query de insert no banco de dados, passando para o banco as informações do objeto recebibo como parâmetro pela função
            await database.query(`INSERT INTO reptil (nome, idade, genero, tipo_de_escamas)
                VALUES
                ('${reptil.getNome().toUpperCase()}', ${reptil.getIdade()}, '${reptil.getGenero().toUpperCase()}', '${reptil.getTipoEscamas().toUpperCase()}');
            `)
            // Testa para ter certeza que foi possível inserir os dados no banco
            .then((result) => {
                // Verifica se o número de linhas adicionadas no banco foi maior que zero
                if(result.rowCount != 0) {
                    // Se o número de linhas for maior que zero, a operação deu certo e o valor VERDADEIRO é atribuido na variável
                    insertResult = true;
                }
            });
            // Retorna VERDADEIRO para quem chamou a função, indicando que a operação foi realizada com sucesso
            return insertResult;
        } catch(error) {
            // Caso a inserção no banco der algum erro, é restorno o valor FALSO para quem chamou a função
            return error;
        }
    }
}
