import React, { useState, useEffect, setState } from 'react';
import ReactDOM from 'react-dom/client';
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
            livros: [],
            carregado: useState(false)[0]
        };

        useEffect(() => {
            setState({
                livros: this.controleLivro.obterLivros(),
                carregado: true
            })
        });
    }

    excluir = (codigoLivro) => {
        this.controleLivro.excluir(codigoLivro);
        setState({ carregado: false });
    };
    
    LinhaLivro(livroLinha, index) {
        var nomeEditora = controleEditora.getNomeEditora(livroLinha.codEditora);
        var listaAutores = livroLinha.autores;
        var listaAutoresHTML = listaAutores.map((autor, index) => <li key={index.toString()}>{autor}</li>);
        return (
            <tr key={index.toString()}>
                <td>
                    <p>{ livroLinha.titulo }</p>
                    <button onClick={() => this.excluir(livroLinha.codigo)}>Excluir</button>
                </td>
                <td>{ livroLinha.resumo }</td>
                <td>{ nomeEditora }</td>
                <td>
                    <ul>{ listaAutoresHTML }</ul>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <main>
                <h1>Catálogo de Livros</h1>
                <table>{ this.state.livros.map((livro, index) => this.LinhaLivro(livro, index)) }</table>
            </main>
        );
    }
}

export default LivroLista
