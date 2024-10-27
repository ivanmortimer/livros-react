"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Editora_js_1 = __importDefault(require("../modelo/Editora.js"));
var editoras = [
    new Editora_js_1.default(0, "Editora A"),
    new Editora_js_1.default(1, "Editora B"),
    new Editora_js_1.default(2, "Editora C")
];
class ControleEditora {
    // Métodos de acesso
    static getEditoras() {
        return editoras;
    }
    static getNomeEditora(codEditora) {
        const novaListaEditoras = editoras.filter((editora) => editora.getCodEditora() === codEditora);
        const nomeEditora = novaListaEditoras[0].getNomeEditora();
        return nomeEditora;
    }
}
console.log(ControleEditora.getNomeEditora(1));
