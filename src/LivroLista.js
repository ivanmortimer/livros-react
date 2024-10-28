import Livro from "./modelo/Livro";
import Editora from "./modelo/Editora";
import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

class LivroLista extends React.Component {

    controleLivro = new ControleLivro;
    controleEditora = new ControleEditora;

    constructor(props) {
        super(props);
        this.state = {
            livros: this.controleLivro.obterLivros(),
            carregado: useState()
        };
    }

    LinhaLivro(props) {
        var nomeEditora = controleEditora.getNomeEditora(props.codEditora);
        var listaAutores = props.autores;
        var listaLivrosHTML = listaAutores.map((autor, index) => <li key={index.toString()}>{autor}</li>);
        return (
            <tr>
                <td>
                    <p>{ props.titulo }</p>
                    <button onClick={this.controleLivro.excluir(props.codigo)}>Excluir</button>
                </td>
                <td>{ props.resumo }</td>
                <td>{ nomeEditora }</td>
                <td>
                    <ul>{ listaLivrosHTML }</ul>
                </td>
            </tr>
        );
    }
}

export default LivroLista
