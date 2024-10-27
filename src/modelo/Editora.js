"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Editora {
    codEditora;
    nome;
    constructor(codEditora, nome) {
        this.codEditora = codEditora;
        this.nome = nome;
    }
    // Métodos de acesso
    getCodEditora() {
        return this.codEditora;
    }
    getNomeEditora() {
        return this.nome;
    }
}
exports.default = Editora;
