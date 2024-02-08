import { Atracao } from "./Atracao";

export class Zoologico {

    private nomeZoologico: string;
    private listaAtracoes: Array<Atracao>;

    constructor(nomeDoZoo: string, atracoes: Array<Atracao>) {
        this.nomeZoologico = nomeDoZoo;
        this.listaAtracoes = atracoes;
    }

    public getNomeZoologico() : string {
        return  this.nomeZoologico;
    }

    public setNomeZoologico(_nomeDoZoo: string) : void {
        this.nomeZoologico = _nomeDoZoo;
    }

    public getHabitats() : Array<Atracao> {
        return this.listaAtracoes;
    }

    public setAnimais(_atracao: Atracao) : void {
        this.listaAtracoes.push(_atracao);
    }
}