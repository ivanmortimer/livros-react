import { useState, useEffect } from 'react';
import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

var controleLivro = new ControleLivro();
var controleEditora = new ControleEditora();

function LinhaLivro(props) {
    var nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);
    var listaAutores = props.livro.autores;
    var listaAutoresHTML = listaAutores.map((autor, index) => <li key={index.toString()}>{autor}</li>);

    return (
        <tr key={props.index.toString()}>
            <td key="titulo">
                <p>{ props.livro.titulo }</p>
                <button type="button" className="btn btn-danger" onClick={() => props.excluir(props.livro.codigo)}>Excluir</button>
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
        if (!carregado) {
            setLivros( controleLivro.obterLivros() );
            setCarregado( true );
        }
    }, [carregado]);

    const excluir = (codigoLivro) => {
        controleLivro.excluir(codigoLivro);
        setCarregado( false );
    };
    
    return (
        <main>
            <h1 className="text-start">Catálogo de Livros</h1>
            <table className="table table-striped table-hover text-start">
                <thead className="table table-dark table-hover">
                    <tr>
                        <th scope="col">Título</th>
                        <th scope="col">Resumo</th>
                        <th scope="col">Editora</th>
                        <th scope="col">Autores</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    { livros.map((liv, ind) => <LinhaLivro livro={liv} excluir={excluir} index={ind} />) }
                </tbody>
            </table>
        </main>
    );

}

export default LivroLista
