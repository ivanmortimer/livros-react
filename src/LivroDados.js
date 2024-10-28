import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ControleLivro from "./controle/ControleLivros.js";
import ControleEditora from "./controle/ControleEditora.js";
import Livro from "./modelo/Livro.js";

var controleLivro = new ControleLivro();
var controleEditora = new ControleEditora();

function LivroDados() {

    var opcoes = (controleEditora.getEditoras()).map((editora) => Object.create({value: editora.codEditora, text: editora.nome}))
    
    const [codigo, setCodigo] = useState(4)
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0].value);

    const navigate = useNavigate();

    const tratarCombo = (evento) => {
        setCodEditora(Number(evento.target.value));
    }
    
    const incluir = (evento) => {
        evento.preventDefault();
        setCodigo(codigo + 1);
        const livro = new Livro(codigo, codEditora, titulo, resumo, autores.split('\n'))
        controleLivro.incluir(livro);
        navigate('/');
    };

    return (
        <main>
            <h1>Inclusão de Livro</h1>
            <form onSubmit={incluir}>
                <div>
                    <label htmlFor="titulo">Título:</label>
                    <input
                        type="text"
                        id="titulo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="resumo">Resumo:</label>
                    <input
                        type="text"
                        id="resumo"
                        value={resumo}
                        onChange={(e) => setResumo(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="codEditora">Editora:</label>
                    <select id="codEditora" value={codEditora} onChange={tratarCombo}>
                        {opcoes.map(opcao => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.text}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="autores">Autores (um por linha):</label>
                    <textarea
                        id="autores"
                        value={autores}
                        onChange={(e) => setAutores(e.target.value)}
                    />
                </div>
                <button type="submit">Incluir Livro</button>
            </form>
        </main>
    );
}

export default LivroDados
