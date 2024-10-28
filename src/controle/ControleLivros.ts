import Livro from "../modelo/Livro"

var livros: Array<Livro> = [
    new Livro(0, 0),
    new Livro(1, 1),
    new Livro(2, 2)
];

class ControleLivro {
    // Métodos de acesso

    public obterLivros(): Array<Livro> {
        return livros;
    }

    public incluir(livro: Livro): void {
        const novaPosicaoFinal = livros.length;
        livro.codigo = novaPosicaoFinal;
        livros.push(livro);
    }

    public excluir(codigoLivro: number): void {
        const posicaoDoLivro = livros.findIndex((livro) => livro.codigo === codigoLivro);
        livros.splice(posicaoDoLivro, 1);
    }
}

// console.log(livros);
// ControleLivro.incluir(new Livro(3, 3));
// console.log(livros);
// ControleLivro.excluir(1);
// console.log(livros);

export default ControleLivro
