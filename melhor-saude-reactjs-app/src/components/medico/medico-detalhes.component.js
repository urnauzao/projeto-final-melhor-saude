import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Medico from '../../models/medico';
import MedicoRequestService from '../../services/medico.service';


function MedicoDetalhes(){
    const [data, setData] = useState(new Medico());
    const [isLoading, setIsLoading] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
          const {data} = await MedicoRequestService.get(id);
          const medico = data.medico;
          setData(medico);
          setIsLoading(true);
          console.log(medico);
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
                  <span className="text-secondary">Médico:</span> {data.nome}
                </h2>
                <div className="container-fluid text-center py-2">
                    <img src={data.foto} className="img-fluid rounded shadow"/>
                </div>
                <div className="container-fluid text-center bg-light shadow align-items-center rounded py-3">
                    <p>
                        <em>Idade: </em>{data.idade}<br/>
                        <em>Especialização: </em>{data.especializacao}<br/>
                        <em>Preço da Consulta: </em>R$ {data.preco_consulta}<br/>
                        <em>Telefone: </em>{data.telefone}<br/>
                        <em>E-mail: </em>{data.email}<br/>
                        <a href={`https://api.whatsapp.com/send?phone=${data.whatsapp}&text=Ol%C3%A1%2C%20venho%20do%20app%20Melhor%20Sa%C3%BAde%20e%20gostaria%20de%20saber%20mais%20sobre...`}
                            className="btn btn-success d-block"
                            target="_blank">
                            Contatar via WhatsApp
                        </a>
                        <Link to={`/clinica/${data.clinica_id}`}>Ver Clínica</Link>
                    </p>
                </div>
            </>
            )
          }
        </div>
      )
}

export default MedicoDetalhes;