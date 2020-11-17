import React, { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Clinica from '../../models/clinica';
import ClinicaRequestService from '../../services/clinica.service';


function ClinicaDetalhes(){
    const [data, setData] = useState(new Clinica());
    const [isLoading, setIsLoading] = useState(false);
    const {id} = useParams();

    const converterData = (dataString) => {
        let date = new Date(dataString);
        let resultado = "";
        resultado += date.getDate() + "/";
        resultado += date.getMonth() + "/";
        resultado += date.getYear();
        return resultado;
    }


    useEffect(() => {
        const fetchData = async () => {
          const {data} = await ClinicaRequestService.get(id);
          const clinica = data.clinica;
          setData(clinica);
          setIsLoading(true);
          console.log(clinica);
        };
        fetchData();
      }, []);

      return(
        <div>
          { !isLoading ? (
            <p>Carregando...</p>
          ) : (
            <>
            <h2 className="text-primary mb-0">
                <span className="text-secondary">Clínica:</span> {data.nome}
            </h2>
            <div className="container-fluid bg-light p-3 rounded">
                <div className="container-fluid text-center py-2">
                    <img src={data.url_imagem} className="img-fluid rounded shadow"/>
                </div>
                <div className="text-center  shadow align-items-center rounded py-3 px-2">
                    <div className="align-items-center d-flex justify-content-around">
                        Classificação: 
                        <ReactStars
                            count={parseFloat(data.rating)}
                            size={32}
                            edit={false}
                            activeColor="#ffd700"
                            color="#ffd700"
                        />
                    </div>
                    <p className="breadcrumb"><em>Descricao: </em>{data.descricao}</p>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <p className="text-justify pl-3">
                                <strong className="text-dark">Informações Gerais</strong><br/>
                                <em>Logradouro: </em>{data.logradouro}<br/>
                                <em>Número: </em>{data.num_endereco}<br/>
                                <em>Complemento: </em>{data.complemento}<br/>
                                <em>CEP: </em>{data.cep}<br/>
                                <em>Bairro: </em>{data.bairro}<br/>
                                <em>Cidade: </em>{data.cidade}, {data.estado}<br/>
                                <em>Pais: </em>{data.pais}<br/>
                                <em>Criado em: </em>{converterData(data.created_at) }<br/>
                                <em>Última Atualização: </em>{converterData(data.updated_at)}
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                            <Link to={"/medicos/"+data.id}>
                                <button className="btn btn-primary btn-block my-remove-decoration">
                                    Médicos da Clínica
                                </button>
                            </Link>
                            <a href={`https://api.whatsapp.com/send?phone=${data.whatsapp}&text=Ol%C3%A1%2C%20venho%20do%20app%20Melhor%20Sa%C3%BAde%20e%20gostaria%20de%20saber%20mais%20sobre...`}
                                className="btn btn-success d-block mt-2"
                                target="_blank">
                                Contatar via WhatsApp
                            </a>
                            <a href={data.url} 
                                className="btn btn-info d-block mt-2"
                                target="_blank">
                                Acessar Site
                            </a>
                        </div>


                    </div>
                </div>
            </div>
            </>
            )
          }
        </div>
      )
}

export default ClinicaDetalhes;