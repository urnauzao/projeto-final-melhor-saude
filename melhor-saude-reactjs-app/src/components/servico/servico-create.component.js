import React, {Component} from "react";
import ServicoRequestService from '../../services/servico.service';
import Servico from '../../models/servico';

export default class ServicoCreate extends Component{
    constructor(props) {
      super(props);
      this.onChange = this.onChange.bind(this);
      this.saveServico = this.saveServico.bind(this);
      this.newServico = this.newServico.bind(this);
  
      this.state = {
        servico: new Servico(),
        submitted: false,
        published: false,
      };
    }
        
    onChange(e){
      let attribute = e.target.getAttribute('name');
      let servico = this.state.servico;
      servico[attribute] = e.target.value;
      this.setState({
        servico: servico
      });
    }

    saveServico() {
      ServicoRequestService.create(this.state.servico)
        .then(response => {
          this.setState({
            published: true,
            submitted: true
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    
    newServico() {
      this.setState({
        servico: new Servico(),
        published: false,
        submitted: false
      });
    }

    render(){
        return (
            <div className="submit-form">
              {this.state.submitted ? (
                <div>
                  <h4>Serviço publicado com sucesso!</h4>
                  <button className="btn btn-success" onClick={this.newServico}>
                    Novo Serviço
                  </button>
                </div>
              ) : (
                <div>
                  <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      required
                      value={this.state.servico.nome}
                      onChange={this.onChange}
                      name="nome"
                    />
                  </div>
                  {this.state.servico.url &&
                    <div className="form-group text-center">
                      <img className="img-200" src={this.state.servico.url} />
                    </div>
                  }
                  <div className="form-group">
                    <label htmlFor="url">Url de Imagem</label>
                    <input
                      type="text"
                      className="form-control"
                      id="url"
                      required
                      value={this.state.servico.url}
                      onChange={this.onChange}
                      name="url"
                    />
                  </div>
                  <button onClick={this.saveServico} className="btn btn-success">
                    Salvar
                  </button>
                </div>
              )}
            </div>
          );
    }
}