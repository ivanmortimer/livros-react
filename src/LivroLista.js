import { useState, useEffect } from 'react';
import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

var controleLivro = new ControleLivro;
var controleEditora = new ControleEditora;

function LinhaLivro(props) {
    var nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);
    var listaAutores = props.livro.autores;
    var listaAutoresHTML = listaAutores.map((autor, index) => <li key={index.toString()}>{autor}</li>);

    return (
        <tr key={props.index.toString()}>
            <td key="titulo">
                <p>{ props.livro.titulo }</p>
                <button onClick={() => props.excluir(props.livro.codigo)}>Excluir</button>
            </td>
            <td key="resumo">{ props.livro.resumo }</td>
            <td key="nomeEditora">{ nomeEditora }</td>
            <td key="listaAutoresHTML">
                <ul>{ listaAutoresHTML }</ul>
            </td>
        </tr>
    );
}


function LivroLista() {

    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        setLivros( controleLivro.obterLivros() );
        setCarregado( true );
    });

    const excluir = (codigoLivro) => {
        controleLivro.excluir(codigoLivro);
        setCarregado( false );
    };
    
    return (
        <main>
            <h1>Catálogo de Livros</h1>
            <table>{ livros.map((liv, ind) => <LinhaLivro livro={liv} excluir={excluir} index={ind} />) }</table>
        </main>
    );

}

export default LivroLista
