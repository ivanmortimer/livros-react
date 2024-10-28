"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Livro_1 = __importDefault(require("../modelo/Livro"));
var livros = [
    new Livro_1.default(0, 0),
    new Livro_1.default(1, 1),
    new Livro_1.default(2, 2)
];
class ControleLivro {
    // Métodos de acesso
    obterLivros() {
        return livros;
    }
    incluir(livro) {
        const novaPosicaoFinal = livros.length;
        livro.codigo = novaPosicaoFinal;
        livros.push(livro);
    }
    excluir(codigoLivro) {
        const posicaoDoLivro = livros.findIndex((livro) => livro.codigo === codigoLivro);
        livros.splice(posicaoDoLivro, 1);
    }
}
// console.log(livros);
// ControleLivro.incluir(new Livro(3, 3));
// console.log(livros);
// ControleLivro.excluir(1);
// console.log(livros);
exports.default = ControleLivro;
