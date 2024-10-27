"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Livro {
    codigo;
    codEditora;
    titulo;
    resumo;
    autores;
    constructor(codigo, codEditora, titulo, resumo, autores) {
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
    }
    // Getter para 'codigo'
    getCodigoLivro() {
        return this.codigo;
    }
    // Setter para 'codigo'
    setCodigoLivro(novoCodigo) {
        this.codigo = novoCodigo;
    }
    // Getter para 'codEditora'
    getCodEditora() {
        return this.codEditora;
    }
    // Getter para 'titulo'
    getTitulo() {
        return this.titulo;
    }
    // Getter para 'resumo'
    getResumo() {
        return this.resumo;
    }
    // Getter para 'autores'
    getAutores() {
        return this.autores;
    }
}
exports.default = Livro;
