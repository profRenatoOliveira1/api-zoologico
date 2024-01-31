import { Animal } from "./Animal";

class Mamifero extends Animal {
    private raca: string;

    constructor(_raca: string,
                _nome: string,
                _idade: number,
                _genero: string) {
        super(_nome, _idade, _genero);
        this.raca = _raca;
    }

    public getRaca(): string {
        return this.raca;
    }

    public setRaca(raca: string): void {
        this.raca = raca;
    }
}