import { Animal } from "./Animal";
import { DatabaseModel } from "./DatabaseModel";

/**
 * Pool de conexão do banco de dados
 */
const database = new DatabaseModel().pool;

/**
 * Representa um mamífero no zoológico, uma subclasse de Animal.
 */
export class Mamifero extends Animal {
    
    /**
     * A raça do mamífero.
     */
    private especie: string;

    /**
     * Cria uma nova instância de Mamifero.
     * 
     * @param _especie A raça do mamífero.
     * @param _nome O nome do mamífero.
     * @param _idade A idade do mamífero.
     * @param _genero O gênero do mamífero.
     */
    constructor(_especie: string,
                _nome: string,
                _idade: number,
                _genero: string) {
        // Chamada ao construtor da classe pai (Animal) para definir nome, idade e gênero
        super(_nome, _idade, _genero);
        this.especie = _especie;
    }

    /**
     * Obtém a raça do mamífero.
     * 
     * @returns A raça do mamífero.
     */
    public getEspecie(): string {
        return this.especie;
    }

    /**
     * Define a raça do mamífero.
     * 
     * @param raca A raça a ser atribuída ao mamífero.
     */
    public setEspecie(raca: string): void {
        this.especie = raca;
    }

    /**
     * Retorna uma lista com todos os mamíferos cadastrados no banco de dados
     * 
     * @returns Lista com todos os mamíferos cadastrados no banco de dados
     */
    static async listarMamiferos() {
        // Cria uma lista (array) vazia do tipo Mamifero
        const listaDeMamiferos: Array<Mamifero> = [];
        try {
            // Faz a consulta no banco de dados e retorna o resultado para a variável queryReturn
            const queryReturn = await database.query(`SELECT * FROM mamifero`);
            // Percorre todas as linhas da queryReturn e acessa cada objeto individualmente
            queryReturn.rows.forEach(mamifero => {
                // Coloca o objeto dentro da lista de mamiferos
                listaDeMamiferos.push(mamifero);
            });

            // só pra testar se a lista veio certa do banco
            console.log(listaDeMamiferos);

            // retorna a lista de mamiferos para quem chamou a função
            return listaDeMamiferos;
        } catch (error) {
            // Caso dê algum erro na query do banco, é lançado o erro para quem chamou a função
            console.log('Erro no modelo');
            console.log(error);
            return "error";
        }
    }

    /**
     * Cadastra um objeto do tipo Mamifero no banco de dados
     * 
     * @param mamifero Objeto do tipo Mamifero
     * @returns **true** caso sucesso, **false** caso erro
     */
    static async cadastrarMamifero(mamifero: Mamifero): Promise<any> {
        try {
            // Cria uma variável do tipo booleano para guardar o status do resultado da query
            let insertResult = false;
            // Faz a query de insert no banco de dados, passando para o banco as informações do objeto recebibo como parâmetro pela função
            await database.query(`INSERT INTO mamifero (nome, idade, genero, raca)
                VALUES
                ('${mamifero.getNome().toUpperCase()}', ${mamifero.getIdade()}, '${mamifero.getGenero().toUpperCase()}', '${mamifero.getEspecie().toUpperCase()}');
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
