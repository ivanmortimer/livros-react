import Livro from "./modelo/Livro";
import Editora from "./modelo/Editora";
import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

class LivroLista extends React.Component {
    controleLivro = new ControleLivro;
    controleEditora = new ControleEditora;
}

class LinhaLivro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            livro: this.props.livro,
            excluir: this.props.excluir,
            nomeEditora: ControleEditora.getNomeEditora(this.livro.codEditora)
        };
    }
}
