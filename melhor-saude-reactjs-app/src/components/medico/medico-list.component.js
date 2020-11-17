import React, { useEffect, useState } from 'react';
import {Link, useParams} from "react-router-dom";
import MedicoRequestService from "../../services/medico.service";

function MedicosList(){
    const [data, setData] = useState({ medicos: []});
    const [isLoading, setIsLoading] = useState(false);
    const {id} = useParams();  

    useEffect(() => {
      const fetchData = async () => {
        if(typeof id !== typeof undefined){
            const {data} = await MedicoRequestService.getAllByClinica(id);
            setData(data);
            setIsLoading(true);
            console.log("medicos",data);
            
        }else{
            const {data} = await MedicoRequestService.getAll();
            setData(data);
            setIsLoading(true);
            console.log("medicos",data);
        }
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
                    Médicos 
                    <Link to={"/medico/novo"} className="nav-link float-right f-12 badge-primary mt-2">
                        Novo Médico
                    </Link>
                </h2>
                <p className="text-secondary">{data.medicos.length} Resultados Encontrados </p>
                {data.medicos.length && 
                    <div className="row bg-light  mb-2 align-items-center p-2 ">
                    {data.medicos.map( (item) => {
                        return (
                            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 p-2">
                                <Link key={item.id} to={"/medico/"+item.id} className="my-remove-decoration">
                                    <div className="card my-card-bg rounded shadow text-center py-2 px-1">
                                        <p className="text-center mt-2">
                                            <img src={item.foto} className="img-200 rounded shadow"/>
                                        </p>
                                        <h5 className="d-inline-block text-truncate">{item.nome}</h5>
                                        <p className="d-inline-block text-truncate"><em>{item.especializacao}</em></p>
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

export default MedicosList;