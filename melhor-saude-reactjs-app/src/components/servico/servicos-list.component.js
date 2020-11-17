import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import ServicoRequestService from '../../services/servico.service';

function ServicosList(){
  const [data, setData] = useState({ servicos: []});
  const [isLoading, setIsLoading] = useState(false);
    
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await ServicoRequestService.getAll();
      setData(data);
      setIsLoading(true);
      console.log("servico",data);
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
            Serviços 
            <Link to={"/servico/novo"} className="nav-link float-right f-12 badge-primary mt-2">
                  Novo Serviço
            </Link>
          </h2>
          <p className="text-secondary">{data.servicos.length} Resultados Encontrados </p>
          {data.servicos.length && 
              <div className="row bg-light  mb-2 align-items-center p-2 ">
              {data.servicos.map( (item) => {
                  return (
                      <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 p-2">
                          <Link key={item.id} to={"/servico/"+item.id} className="my-remove-decoration">
                              <div className="card my-card-bg rounded shadow text-center py-2 px-1">
                                  <p className="text-center mt-2">
                                      <img src={item.url} className="img-h-120  rounded shadow"/>
                                  </p>
                                  <h5 className="d-inline-block text-truncate">{item.nome}</h5>
                              </div>
                          </Link>
                      </div>
                  )
              })}
              </div>
          || <p>Nada Encontrado!</p>
          }
        </>
      )   
    }
    </div>
  )
}
export default ServicosList;
