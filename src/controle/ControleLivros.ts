import Livro from "../modelo/Livro.js"

const livros: Array<Livro> = [
    new Livro(0, 0, "Aprendendo TypeScript", "Um guia completo para TypeScript.", ["Autor A", "Autor B"]),
    new Livro(1, 1, "Dominando JavaScript", "Conceitos avançados em JavaScript.", ["Autor C"]),
    new Livro(2, 2, "Introdução ao Node.js", "Uma introdução prática ao Node.js.", ["Autor D", "Autor E"])
];

class ControleLivro {
    // Métodos de acesso

    public static obterLivros(): Array<Livro> {
        return livros;
    }

    public static incluir(livro: Livro): void {
        const novaPosicaoFinal = livros.length;
        livro.setCodigo(novaPosicaoFinal);
        livros.push(livro);
    }
}
