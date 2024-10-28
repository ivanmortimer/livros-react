import { useState, useNavigate } from "react";
import ControleLivro from "./controle/ControleLivros.js";
import ControleEditora from "./controle/ControleEditora.js";

var controleLivro = new ControleLivro;
var controleEditora = new ControleEditora;

function LivroDados() {

    var opcoes = (controleEditora.getEditoras()).map((editora) => Object.create({value: editora.codEditora, text: editora.nome}))
    
    const [titulo, setTitulo] = useState();
    const [resumo, setResumo] = useState();
    const [autores, setAutores] = useState();
    const [codEditora, setCodEditora] = useState(opcoes[0].value);

    const navigate = useNavigate();

    function tratarCombo(evento) {
        setCodEditora(Number(target.evento));
    }
    
    return (
        <main>Olá mundo</main>
    )
}

export default LivroDados
