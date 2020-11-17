import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Home() {
    // const [data, setData] = useState(new Clinica());
    const [isLoading, setIsLoading] = useState(true);
    // const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
        };
        fetchData();
    }, []);

    return (
        <div>
            { !isLoading ? (
                <p>Carregando...</p>
            ) : (
                    <>
                        <section class="jumbotron text-center">
                            <div class="container">
                            <img src="/logo512.png" className="img-200"/>
                                <h1>Melhor Saúde</h1>
                                <p class="lead text-muted">Uma plataforma feita para preservar o seu bem estar e de toda sua familia.</p>
                                <p>
                                    <Link to={"/servicos"} class="btn btn-primary my-2">Nossos Serviços</Link>
                                    <Link to={"/clinicas"} class="btn btn-secondary my-2">Nossas Clínicas</Link>
                                </p>
                            </div>
                        </section>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12 card shadow-sm p-2">
                                <h4>
                                    Encontre especialistas
                            </h4>
                                <p>
                                    Busque por especialistas de saúde em sua região. Filtre por planos de saúde, tratamentos ou disponibilidade.
                            </p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 card shadow-sm p-2">
                                <h4>
                                    Marque consultas
                            </h4>
                                <p>
                                    Escolha o profissional, dia e horário que desejar, agendando sua consulta em até dois minutos. Sem complicação.
                            </p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 card shadow-sm p-2">
                                <h4>
                                    Receba lembretes
                            </h4>
                                <p>
                                    Confirmamos tudo imediatamente pelo email informado e, antes da consulta, um lembrete será enviado via celular.
                            </p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 card shadow-sm p-2">
                                <h4>
                                    Avalie o serviço
                            </h4>
                                <p>
                                    Após a consulta você poderá deixar sua opinião sobre o serviço. Tudo isso de forma gratuita, simples e rápida.
                            </p>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Home;





