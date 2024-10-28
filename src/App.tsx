import React from 'react';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import './App.css';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar bg-dark border-bottom border-body navbar-dark navbar-text">
          <div className="container-fluid">
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item me-3">  {/* Classe me-3 adiciona margem à direita */}
                <Link className="nav-link text-white" to="/">Catálogo</Link> {/* text-white para cor branca */}
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/dados">Novo</Link> {/* text-white para cor branca */}
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
