import { Animal } from "./Animal";

/**
 * Representa uma ave no zoológico.
 * Estende a classe Animal.
 */
export class Ave extends Animal {
    
    /**
     * A envergadura da ave (em centímetros).
     */
    private envergadura: number;

    /**
     * Cria uma nova instância de Ave.
     * 
     * @param _nome O nome da ave.
     * @param _idade A idade da ave.
     * @param _genero O gênero da ave.
     * @param _envergadura A envergadura da ave.
     */
    constructor(_nome: string,
                _idade: number,
                _genero: string,
                _envergadura: number) {
        // Chama o construtor da classe pai (Animal)
        super(_nome, _idade, _genero);
        // Atribui a envergadura fornecida ao atributo envergadura da ave
        this.envergadura = _envergadura;
    }

    /**
     * Obtém a envergadura da ave.
     * 
     * @returns A envergadura da ave.
     */
    public getEnvergadura(): number {
        return this.envergadura;
    }

    /**
     * Define a envergadura da ave.
     * 
     * @param _envergadura A envergadura a ser atribuída à ave.
     */
    public setEnvergadura(_envergadura: number): void {
        this.envergadura = _envergadura;
    }
}
