import React, { useState } from 'react';
import { useForm } from "react-hook-form";
// import Clinica from '../../models/clinica';
import ClinicaRequestService from "../../services/clinica.service"

function ClinicaCreate(){
    // const [data, setData] = useState(new Clinica());
    const { register, handleSubmit } = useForm();
    const [isCreated, setIsCreated] = useState(false);

    
    const onSubmit = (data) => {
        // console.log("clinica", JSON.stringify(data));
        const fetchData = async (obj) => {
            obj.local_resumido = `${obj.logradouro}, ${obj.num_endereco}, ${obj.bairro}`;

            ClinicaRequestService.create(obj)
            .then(response => {
                setIsCreated(true);
                console.log(response);
            })
            .catch(e => {
                console.log(e);
                console.log("obj",obj);
            });
        };
        fetchData(data);
    };

    // useEffect(() => {
    //     const fetchData = async () => {
    //       const {data} = await ClinicaRequestService.createWithServico(id);
    //       const servico = data.servicos[0];
    //       setData(servico);
    //       setIsLoading(true);
    //       console.log("servico",servico);
    //     };
    //     fetchData();
    //   }, []);


  

  
    return (
        <>
        { !isCreated ? (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="exampleInputNome1">Nome da Clínica:</label>
                    <input type="text" name="nome" className="form-control" id="exampleInputNome1" aria-describedby="nomeHelp" placeholder="Nome da Clínica" ref={register} />
                    <small id="nomeHelp" className="form-text text-muted">Você precisa informar um nome.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputUrlImagem1">Link da imagem da Clínica:</label>
                    <input type="text" name="url_imagem" className="form-control" id="exampleInputUrlImagem1" aria-describedby="urlimagemHelp" placeholder="Ex: https://melhorsaude.com.br/foto.jpg" ref={register} />
                    <small id="urlimagemHelp" className="form-text text-muted">Você precisa informar um link de imagem. Ex: "https://melhorsaude.com.br/foto.jpg".</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputRating1">Classificação:</label>
                    <input type="number" name="rating" min="0" max="5" className="form-control" id="exampleInputRating1" aria-describedby="ratingHelp" placeholder="Ex: 3.4" ref={register} />
                    <small id="ratingHelp" className="form-text text-muted">Digita a nota de classificação da clínica. Ex: 3.4</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputDescricao1">Descrição:</label>
                    <textarea name="descricao" className="form-control" maxLength="300" id="exampleInputDescricao1" aria-describedby="descricaoHelp" placeholder="Ex: São mais de 10 anos atendendo..." ref={register} />
                    <small id="descricaoHelp" className="form-text text-muted">Descreva a clínica.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="logradouro">Logradouro:</label>
                    <input type="text" name="logradouro" className="form-control" id="logradouro" placeholder="Ex: Rua. Jão Alvez" ref={register} />
                </div>
                <div className="form-group">
                    <label htmlFor="numeroLogradouro">Número:</label>
                    <input type="number" name="num_endereco" className="form-control" id="numeroLogradouro" placeholder="Ex: 301" ref={register} />
                </div>
                <div className="form-group">
                    <label htmlFor="Complemento">Complemento:</label>
                    <input type="text" name="complemento" className="form-control" id="Complemento" placeholder="Ex: Apt 04" ref={register} />
                </div>
                <div className="form-group">
                    <label htmlFor="CEP">CEP:</label>
                    <input type="text" name="cep" className="form-control" id="CEP" placeholder="Ex: 01001-002" ref={register} />
                </div>
                <div className="form-group">
                    <label htmlFor="BAIRRO">Bairro</label>
                    <input type="text" name="bairro" className="form-control" id="BAIRRO" placeholder="Ex: Tucuruvi" ref={register} />
                </div>
                <div className="form-group">
                    <label htmlFor="Cidade">Cidade:</label>
                    <input type="text" name="cidade" className="form-control" id="Cidade" placeholder="Ex: São Paulo" ref={register} />
                </div>
                <div className="form-group">
                    <label htmlFor="Estado">Estado:</label>
                    <select type="text" name="estado" className="form-control" id="Estado" value="SP" defaultValue="SP" ref={register}>
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="PAIS">Pais:</label>
                    <input type="text" name="pais" className="form-control" id="PAIS" value="Brasil" ref={register} />
                </div>
                <div className="form-group">
                    <label htmlFor="whatsapp">WhatsApp:</label>
                    <input type="number" name="whatsapp" className="form-control" id="whatsapp" placeholder="Ex: 5511990001000" ref={register} />
                </div>
                <div className="form-group">
                    <label htmlFor="siteClinica">Site da Clínica:</label>
                    <input type="text" name="url" className="form-control" id="siteClinica" placeholder="https://clinica.com.br" ref={register} />
                </div>
            <br/>
            <button type="submit" className="btn btn-primary mb-2">Criar Clínica</button>
            </form>
        </div>
        ) : (
            <p>Item Criado com Sucesso</p>
        )
        }
        </>
    );

}

export default ClinicaCreate;


