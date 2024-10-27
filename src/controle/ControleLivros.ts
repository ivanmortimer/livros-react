import Livro from "../modelo/Livro.js"

var livros: Array<Livro> = [
    new Livro(0, 0),
    new Livro(1, 1),
    new Livro(2, 2)
];

class ControleLivro {
    // Métodos de acesso

    public static obterLivros(): Array<Livro> {
        return livros;
    }

    public static incluir(livro: Livro): void {
        const novaPosicaoFinal = livros.length;
        livro.codigo = novaPosicaoFinal;
        livros.push(livro);
    }

    public static excluir(codigo: number): void {
        const posicaoDoLivro = livros.findIndex((livro) => livro.codigo === codigo);
        livros = livros.slice(posicaoDoLivro, posicaoDoLivro + 1);
    }
}

console.log(livros);
ControleLivro.incluir(new Livro(3, 3));
console.log(livros);
ControleLivro.excluir(1);
console.log(livros);
