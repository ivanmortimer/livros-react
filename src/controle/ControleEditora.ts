import Editora from "../modelo/Editora.js"

var editoras: Array<Editora> = [
    new Editora(0, "Editora A"),
    new Editora(1, "Editora B"),
    new Editora(2, "Editora C")
];

class ControleEditora {

    // Métodos de acesso

    public static getEditoras(): Array<Editora> {
        return editoras;
    }

    public static getNomeEditora(codEditora: number): string {
        const novaListaEditoras: Array<Editora> = editoras.filter((editora) => editora.getCodEditora() === codEditora);
        const nomeEditora: string = novaListaEditoras[0].getNomeEditora();
        return nomeEditora;
    }
}

console.log(ControleEditora.getNomeEditora(1));
