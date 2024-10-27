import Livro from "./modelo/Livro";
import Editora from "./modelo/Editora";
import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

class LivroLista extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            livro: this.props.livro,
            excluir: this.props.excluir,
            nomeEditora: ControleEditora.getNomeEditora(livro.codEditora)
        }
    }
    controleLivro = new ControleLivro;
    controleEditora = new ControleEditora;

    LinhaLivro(props) {
        const [livro, setLivro] = useState(this.props.livro);
        const [excluir, setExcluir] = useState(this.props.excluir);
        const [nomeEditora, setNomeEditora] = useState(ControleEditora.getNomeEditora(livro.codEditora));
    
        return (
            <tr>
                <td>{ livro.codigo }</td>
            </tr>
        );
    }
    
}
