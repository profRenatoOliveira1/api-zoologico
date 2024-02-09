import { Atracao } from "./Atracao";

/**
 * Representa um zoológico, que contém uma lista de atrações.
 */
export class Zoologico {

    /**
     * O nome do zoológico.
     */
    private nomeZoologico: string;

    /**
     * A lista de atrações do zoológico.
     */
    private listaAtracoes: Array<Atracao>;

    /**
     * Cria uma nova instância de Zoologico.
     * 
     * @param nomeDoZoo O nome do zoológico.
     * @param atracoes As atrações do zoológico.
     */
    constructor(nomeDoZoo: string, atracoes: Array<Atracao>) {
        this.nomeZoologico = nomeDoZoo;
        this.listaAtracoes = atracoes;
    }

    /**
     * Obtém o nome do zoológico.
     * 
     * @returns O nome do zoológico.
     */
    public getNomeZoologico() : string {
        return  this.nomeZoologico;
    }

    /**
     * Define o nome do zoológico.
     * 
     * @param _nomeDoZoo O nome a ser atribuído ao zoológico.
     */
    public setNomeZoologico(_nomeDoZoo: string) : void {
        this.nomeZoologico = _nomeDoZoo;
    }

    /**
     * Obtém a lista de atrações do zoológico.
     * 
     * @returns A lista de atrações do zoológico.
     */
    public getAtracoes() : Array<Atracao> {
        return this.listaAtracoes;
    }

    /**
     * Define a lista de atrações do zoológico.
     * 
     * @param _atracao A atração a ser adicionada à lista de atrações do zoológico.
     */
    public setAtracoes(_atracao: Atracao) : void {
        this.listaAtracoes.push(_atracao);
    }
}
