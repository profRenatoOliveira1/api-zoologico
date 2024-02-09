import { Animal } from "./Animal";

/**
 * Representa um mamífero no zoológico, uma subclasse de Animal.
 */
export class Mamifero extends Animal {
    
    /**
     * A raça do mamífero.
     */
    private raca: string;

    /**
     * Cria uma nova instância de Mamifero.
     * 
     * @param _raca A raça do mamífero.
     * @param _nome O nome do mamífero.
     * @param _idade A idade do mamífero.
     * @param _genero O gênero do mamífero.
     */
    constructor(_raca: string,
                _nome: string,
                _idade: number,
                _genero: string) {
        // Chamada ao construtor da classe pai (Animal) para definir nome, idade e gênero
        super(_nome, _idade, _genero);
        this.raca = _raca;
    }

    /**
     * Obtém a raça do mamífero.
     * 
     * @returns A raça do mamífero.
     */
    public getRaca(): string {
        return this.raca;
    }

    /**
     * Define a raça do mamífero.
     * 
     * @param raca A raça a ser atribuída ao mamífero.
     */
    public setRaca(raca: string): void {
        this.raca = raca;
    }
}
