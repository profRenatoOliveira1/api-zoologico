import { Habitat } from "./Habitat";

/**
 * Representa uma atração em um zoológico.
 */
export class Atracao {

    /**
     * O nome da atração.
     */
    private nomeAtracao: string;

    /**
     * A lista de habitats presentes na atração.
     */
    private listaHabitats: Array<Habitat>;

    /**
     * Cria uma nova instância de Atracao.
     * 
     * @param _nome O nome da atração.
     * @param _habitats A lista de habitats presentes na atração.
     */
    constructor(_nome: string, _habitats: Array<Habitat>) {
        this.nomeAtracao = _nome;
        this.listaHabitats = _habitats;
    }

    /**
     * Obtém o nome da atração.
     * 
     * @returns O nome da atração.
     */
    public getNomeAtracao(): string {
        return this.nomeAtracao;
    }

    /**
     * Define o nome da atração.
     * 
     * @param _nomeAtracao O nome a ser atribuído à atração.
     */
    public setNomeAtracao(_nomeAtracao: string): void {
        this.nomeAtracao = _nomeAtracao;
    }

    /**
     * Obtém a lista de habitats presentes na atração.
     * 
     * @returns A lista de habitats da atração.
     */
    public getHabitats(): Array<Habitat> {
        return this.listaHabitats;
    }

    /**
     * Define a lista de habitats da atração.
     * 
     * @param _habitats A lista de habitats a ser atribuída à atração.
     */
    public setHabitats(_habitats: Array<Habitat>): void {
        this.listaHabitats = _habitats;
    }

    /**
     * Adiciona um habitat à lista de habitats da atração.
     * 
     * @param _habitat O habitat a ser adicionado à atração.
     */
    public adicionarHabitat(_habitat: Habitat): void {
        this.listaHabitats.push(_habitat);
    }
}
