import { Habitat } from "./Habitat";

export class Atracao {

    private nomeAtracao: string;
    private listaHabitats: Array<Habitat>;

    constructor(_nome: string, _habitats: Array<Habitat>) {
        this.nomeAtracao = _nome;
        this.listaHabitats = _habitats;
    }

    public getNomeAtracao() : string {
        return  this.nomeAtracao;
    }

    public setNomeHabitat(_nomeAtracao: string) : void {
        this.nomeAtracao = _nomeAtracao;
    }

    public getHabitats() : Array<Habitat> {
        return this.listaHabitats;
    }

    public setAnimais(_habitat: Habitat) : void {
        this.listaHabitats.push(_habitat);
    }
}