import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import ClinicaRequestService from "../../services/clinica.service";
import ReactStars from "react-rating-stars-component";

function ClinicasList(){
    const [data, setData] = useState({ clinicas: []});
    const [isLoading, setIsLoading] = useState(false);
      
    useEffect(() => {
      const fetchData = async () => {
        const {data} = await ClinicaRequestService.getAll();
        setData(data);
        setIsLoading(true);
        console.log("clinica",data);
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
            Clínicas 
            <Link to={"/clinica/novo"} className="nav-link float-right f-12 badge-primary mt-2">
                  Nova Clínica
            </Link>
          </h2>
          <p className="text-secondary">{data.clinicas.length} Resultados Encontrados </p>
            <ul className="px-0">
              <li className="list-group">
              </li>
              {data.clinicas.map( (item) => {
                return (
                <div className="row bg-light shadow mb-2 align-items-center rounded">
                    <div className="col-lg-2 col-md-3 col-sm-12 py-2">
                        <img src={item.url_imagem} className="img-fluid rounded shadow"/>
                    </div>
                    <div className="col-lg-5 col-md-4 col-sm-12 py-1">
                        <h4 className="text-info">{item.nome}</h4>
                        <Link key={item.id} to={"/clinica/"+item.id}>
                            <button className="btn btn-info text-center py-0">
                                Mais Detalhes
                            </button>      
                        </Link>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 py-1">
                        <p>
                        <ReactStars
                            count={item.rating}
                            size={24}
                            edit={false}
                            activeColor="#ffd700"
                            color="#ffd700"
                        />
                            <em>Bairro: </em>{item.bairro}<br/>
                            <em>Cidade: </em>{item.cidade}, {item.estado}<br/>
                            <a href={item.url} target="_blank">
                                Acessar Site
                            </a><br/>
                        </p>
                    </div>

                </div>
                )
              })}
            </ul>
          </>
          )
        }
      </div>
    )
}

export default ClinicasList;