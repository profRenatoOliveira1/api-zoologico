import { Animal } from "./Animal";

/**
 * Representa um habitat no zoológico, onde os animais vivem.
 */
export class Habitat {

    /**
     * O nome do habitat.
     */
    private nome: string;

    /**
     * A lista de animais que habitam este habitat.
     */
    private listaAnimais: Array<Animal>;

    /**
     * Cria uma nova instância de Habitat.
     * 
     * @param _nome O nome do habitat.
     * @param _listaAnimais A lista de animais que habitam o habitat.
     */
    constructor(_nome: string, _listaAnimais: Array<Animal>) {
        this.nome = _nome;
        this.listaAnimais = _listaAnimais;
    }

    /**
     * Obtém o nome do habitat.
     * 
     * @returns O nome do habitat.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do habitat.
     * 
     * @param _nome O nome a ser atribuído ao habitat.
     */
    public setNome(_nome: string): void {
        this.nome = _nome;
    }

    /**
     * Obtém a lista de animais do habitat.
     * 
     * @returns A lista de animais do habitat.
     */
    public getListaAnimais(): Array<Animal> {
        return this.listaAnimais;
    }

    /**
     * Define a lista de animais do habitat.
     * 
     * @param _listaAnimais A lista de animais a ser atribuída ao habitat.
     */
    public setListaAnimais(_listaAnimais: Array<Animal>): void {
        this.listaAnimais = _listaAnimais;
    }
}
