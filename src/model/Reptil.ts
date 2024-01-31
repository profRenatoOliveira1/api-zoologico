import { Animal } from "./Animal";

class Reptil extends Animal {
    private tipo_escamas: string;

    constructor(_nome: string, 
                _idade: number, 
                _genero: string, 
                _tipo_escamas: string) {
        super(_nome, _idade, _genero);
        this.tipo_escamas = _tipo_escamas;
    }

    public getTipoEscamas() {
        return this.tipo_escamas;
    }

    public setTipoEscamas(_tipo_escamas: string) {
        this.tipo_escamas = _tipo_escamas;
    }
}