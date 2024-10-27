"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Livro_js_1 = __importDefault(require("../modelo/Livro.js"));
var livros = [
    new Livro_js_1.default(0, 0),
    new Livro_js_1.default(1, 1),
    new Livro_js_1.default(2, 2)
];
class ControleLivro {
    // Métodos de acesso
    static obterLivros() {
        return livros;
    }
    static incluir(livro) {
        const novaPosicaoFinal = livros.length;
        livro.codigo = novaPosicaoFinal;
        livros.push(livro);
    }
    static excluir(codigo) {
        const posicaoDoLivro = livros.findIndex((livro) => livro.codigo === codigo);
        livros = livros.slice(posicaoDoLivro, posicaoDoLivro + 1);
    }
}
console.log(livros);
ControleLivro.incluir(new Livro_js_1.default(3, 3));
console.log(livros);
ControleLivro.excluir(1);
console.log(livros);
