"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Livro {
    codigo = 0;
    codEditora = 0;
    titulo = "";
    resumo = "";
    autores = [];
    constructor(codigo, codEditora) {
        this.codigo = codigo;
        this.codEditora = codEditora;
    }
}
exports.default = Livro;
