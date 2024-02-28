import { DatabaseModel } from "./DatabaseModel";

/**
 * Pool de conexão do banco de dados
 */
const database = new DatabaseModel().pool;

/**
 * Representa um animal no zoológico.
 */
export class Animal {

    /**
     * O nome do animal.
     */
    private nomeAnimal: string;

    /**
     * A idade do animal.
     */
    private idadeAnimal: number;

    /**
     * O gênero do animal (ex: "macho", "fêmea", "desconhecido").
     */
    private generoAnimal: string;

    /**
     * Cria uma nova instância de Animal.
     * 
     * @param _nome O nome do animal.
     * @param _idade A idade do animal.
     * @param _genero O gênero do animal.
     */
    constructor(_nome: string,
        _idade: number,
        _genero: string) {
        this.nomeAnimal = _nome;
        this.idadeAnimal = _idade;
        this.generoAnimal = _genero;
    }

    /**
     * Obtém o nome do animal.
     * 
     * @returns O nome do animal.
     */
    public getNomeAnimal(): string {
        return this.nomeAnimal;
    }

    /**
     * Define o nome do animal.
     * 
     * @param nome O nome a ser atribuído ao animal.
     */
    public setNomeAnimal(nome: string): void {
        this.nomeAnimal = nome;
    }

    /**
     * Obtém a idade do animal.
     * 
     * @returns A idade do animal.
     */
    public getIdadeAnimal(): number {
        return this.idadeAnimal;
    }

    /**
     * Define a idade do animal.
     * 
     * @param idade A idade a ser atribuída ao animal.
     */
    public setIdadeAnimal(idade: number): void {
        this.idadeAnimal = idade;
    }

    /**
     * Obtém o gênero do animal.
     * 
     * @returns O gênero do animal.
     */
    public getGeneroAnimal(): string {
        return this.generoAnimal;
    }

    /**
     * Define o gênero do animal.
     * 
     * @param genero O gênero a ser atribuído ao animal.
     */
    public setGeneroAnimal(genero: string): void {
        this.generoAnimal = genero;
    }

    /**
     * Retorna uma lista com todos os animais cadastrados no sistema.
     * @returns lista com os animais cadastrados no sistema
     */
    static async listarTodosAnimais(): Promise<any> {
        try {
            // Query para a consulta no banco de dados
            const selectAllQuery = `SELECT
                                        a.idAnimal,
                                        a.nomeAnimal,
                                        a.idadeAnimal,
                                        a.generoAnimal,
                                        CASE
                                            WHEN av.idAve IS NOT NULL THEN 'Ave'
                                            WHEN m.idMamifero IS NOT NULL THEN 'Mamifero'
                                            WHEN r.idReptil IS NOT NULL THEN 'Reptil'
                                        END AS tipoAnimal,
                                        av.envergadura,
                                        m.especie,
                                        r.tipoDeEscamas
                                    FROM
                                        Animal a
                                    LEFT JOIN
                                        Ave av ON a.idAnimal = av.idAve
                                    LEFT JOIN
                                        Mamifero m ON a.idAnimal = m.idMamifero
                                    LEFT JOIN
                                        Reptil r ON a.idAnimal = r.idReptil;
            `
            // Executa a query e retorna o resultado para quem chamou a função
            return await database.query(selectAllQuery);
        } catch (error) {
            // Caso dê algum erro na query do banco, é lançado o erro para quem chamou a função
            console.log('Erro no modelo');
            console.log(error);
            return "error, verifique os logs do servidor";
        }
    }
}