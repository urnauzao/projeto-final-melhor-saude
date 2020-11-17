import React, {Component, useEffect, useState} from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Servico from "../../models/servico";
import ServicoRequestService from '../../services/servico.service';

function ServicoDetalhes(){
    const [data, setData] = useState(new Servico());
    const [isLoading, setIsLoading] = useState(false);
    const {id} = useParams();
    useEffect(() => {
        const fetchData = async () => {
          const {data} = await ServicoRequestService.get(id);
          const servico = data.servicos[0];
          setData(servico);
          setIsLoading(true);
          console.log("servico",servico);
        };
        fetchData();
      }, []);
    return (
        <div>
        { !isLoading ? 
            (
                <p>Carregando...</p> 
            ) : (
                <>
                    <h2 className="text-primary mb-0">
                        {data.nome}
                        <Link to={"/servicos"} className="nav-link float-right f-12 badge-danger mt-2">
                            Voltar
                        </Link>
                    </h2>

                    <p className="text-secondary">Foram encontradas {data.clinicas.length} clínicas.</p>
                    {data.clinicas.length && 
                        <div className="row bg-light  mb-2 align-items-center p-2 ">
                        {data.clinicas.map( (item) => {
                            return (
                                <div key={item.id} className="col-lg-6 col-md-6 col-sm-12 p-2">
                                    <Link key={item.id} to={"/clinica/"+item.id} className="my-remove-decoration">
                                        <div className="card my-card-bg rounded shadow text-center py-2 px-1">
                                            <p className="text-center mt-2">
                                                <img src={item.url_imagem} className="img-h-120  rounded shadow"/>
                                            </p>
                                            <h5 className="d-inline-block text-truncate">{item.nome}</h5>
                                            <p className="my-text-description">
                                                {item.descricao}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                        </div>
                    ||  <p>Nenhuma clínica encontrada para este tipo de serviço!</p>
                    }
                </>
            )
        }
        </div>
    )


}

export default ServicoDetalhes;



{/* <> */}
{/* <h2 className="text-center text-primary">{data.nome}</h2> */}
{/* <h5 className="text-center text-secondary">Total de Clínicas: {data.clinicas.length}</h5> */}
{/* <ul className="px-0"> */}
    {/* {data.clinicas.map( (clinica) => { */}
    {/* return ( */}
        {/* <Link key={clinica.id} to={"/clinica/"+clinica.id}> */}
        {/* <li className="list-group-item list-group-item-primary rounded mb-1"> */}
            {/* <div className="row align-items-center"> */}
                {/* <div className="col-md-4 col-12 text-center bg-light"> */}
                {/* <img src={clinica.url_imagem} className="img-200 img-fluid"/> */}
                {/* </div> */}
                {/* <div className="col-md-8 col-12"> */}
                    {/* <h5 className="text-dark text-center">{clinica.nome}</h5> */}
                    {/* <p> */}
                        {/* {clinica.descricao} */}
                    {/* </p> */}
                {/* </div> */}
            {/* </div> */}
        {/* </li> */}
        {/* </Link> */}
    {/* ) */}
    {/* })} */}
// </ul>
// </>