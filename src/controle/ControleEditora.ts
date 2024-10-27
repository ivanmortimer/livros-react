import Editora from "../modelo/Editora"

var editoras: Array<Editora> = [
    new Editora(0),
    new Editora(1),
    new Editora(2)
];

class ControleEditora {

    // Métodos de acesso

    public static getEditoras(): Array<Editora> {
        return editoras;
    }

    public static getNomeEditora(codigoEditora: number): string {
        const novaListaEditoras: Array<Editora> = editoras.filter((editora) => editora.codEditora === codigoEditora);
        const nomeEditora: string = novaListaEditoras[0].nome;
        return nomeEditora;
    }
}

console.log(editoras);
console.log(ControleEditora.getNomeEditora(1));

export default ControleEditora
