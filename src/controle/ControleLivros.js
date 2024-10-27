"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Livro_js_1 = __importDefault(require("../modelo/Livro.js"));
const livros = [
    new Livro_js_1.default(0, 0, "Aprendendo TypeScript", "Um guia completo para TypeScript.", ["Autor A", "Autor B"]),
    new Livro_js_1.default(1, 1, "Dominando JavaScript", "Conceitos avançados em JavaScript.", ["Autor C"]),
    new Livro_js_1.default(2, 2, "Introdução ao Node.js", "Uma introdução prática ao Node.js.", ["Autor D", "Autor E"])
];
class ControleLivro {
    // Métodos de acesso
    static obterLivros() {
        return livros;
    }
    static incluir(livro) {
        const ;
    }
}
