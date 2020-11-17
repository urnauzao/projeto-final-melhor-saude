import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';

/**@desc Styles*/
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/** @desc Components */
import ServicoCreate from './components/servico/servico-create.component';
import ServicosList from './components/servico/servicos-list.component';
import ServicoDetalhes from './components/servico/servico-detalhes.component';
import ClinicasList from './components/clinica/clinicas-list.component';
import ClinicaDetalhes from './components/clinica/clinica-detalhes.component';
import MedicoList from './components/medico/medico-list.component';
import MedicoDetalhes from './components/medico/medico-detalhes.component';
import Home from './components/home/home.component';
import ClinicaCreate from './components/clinica/clinica-create.component';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark my-bg-primary">
          <a href="/" className="navbar-brand">
            MELHOR SAÚDE
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/servicos"} className="nav-link">
                Serviços
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/clinicas"} className="nav-link">
                Clínicas
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/medicos"} className="nav-link">
                Médicos
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/servicos"} component={ServicosList} />
            <Route exact path="/servico/novo" component={ServicoCreate} />
            <Route exact path="/clinicas" component={ClinicasList} />
            <Route exact path="/clinica/novo" component={ClinicaCreate} />
            <Route path="/servico/:id" component={ServicoDetalhes} />
            <Route path="/clinica/:id" component={ClinicaDetalhes} />
            <Route path={["/medicos/:id", "/medicos"]} component={MedicoList} />
            <Route path="/medico/:id" component={MedicoDetalhes} />
          </Switch>
        </div>

      </div>
    );
  }
}
export default App;