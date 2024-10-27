"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Editora_js_1 = __importDefault(require("../modelo/Editora.js"));
var editoras = [
    new Editora_js_1.default(0),
    new Editora_js_1.default(1),
    new Editora_js_1.default(2)
];
class ControleEditora {
    // Métodos de acesso
    static getEditoras() {
        return editoras;
    }
    static getNomeEditora(codigoEditora) {
        const novaListaEditoras = editoras.filter((editora) => editora.codEditora === codigoEditora);
        const nomeEditora = novaListaEditoras[0].nome;
        return nomeEditora;
    }
}
console.log(editoras);
console.log(ControleEditora.getNomeEditora(1));
