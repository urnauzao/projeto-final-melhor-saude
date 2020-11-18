import React from 'react';
import ClinicaView from '../View/ClinicaView';
import DefaultController from './../../../components/DefaultController';
import imagemModeloMedico from './../../../assets/images/exemplos/medico.jpg';
import axios from 'axios';

class ClinicaController extends DefaultController{
    constructor(props) {
        super(props);
        // console.log(props)
        let arrayClinicas = [];

        // const getRandomInt = (min = 0, max = 5) => {
        //     min = Math.ceil(min);
        //     max = Math.floor(max);
        //     return Math.floor(Math.random() * (max - min)) + min;
        // }
        

        this.state = {
            originalArrayClinicas: [... arrayClinicas],
            filteredArrayClinicas: [... arrayClinicas],
            search: "",
        }
    }
    componentWillUnmount(){
        let originalArrayClinicas = [];
        let filteredArrayClinicas = [];
        this.setState({ originalArrayClinicas });
        this.setState({ filteredArrayClinicas });
    }

    componentDidMount() {
        if(this.props.navigation.state.params && this.props.navigation.state.params.servicos){
            let servico = this.props.navigation.state.params.servicos[0];
            let originalArrayClinicas = servico.clinicas;
            let filteredArrayClinicas = servico.clinicas;
            // console.log(originalArrayClinicas);
            // let filteredArrayClinicas =
            // console.log("this.props.navigation.state.params");
            // console.log(this.props.navigation.state.params);
            this.props.navigation.setParams({titlePage:"Clínicas: "+servico.nome});
            this.props.navigation.setParams({showBackButton:true});
            this.setState({ originalArrayClinicas });
            this.setState({ filteredArrayClinicas });
            // this.updateSearch(search);
            
        }else{
            this.props.navigation.setParams({titlePage:"Clínica"});
            this.props.navigation.setParams({showBackButton:true});
            // this.props.navigation.setParams({titlePage:'Clínica'});
            axios.get('http://melhor-saude-webservice.herokuapp.com/clinica/all')
            .then(({data}) => {
                console.log("rodando");
                let originalArrayClinicas = data.clinicas;

                this.setState({ originalArrayClinicas });
                this.updateSearch(this.state.search);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

    goToClinicaDetalhes = (clinica) => {
        let id = clinica.clinica.item.id;
        axios.get('http://melhor-saude-webservice.herokuapp.com/medico/clinica/'+id)
        .then(({data}) => {
            clinica.clinica.item.medicos = data.medicos;
            return this.props.navigation.navigate('ClinicaDetalhe', clinica);
        })
        .catch((error) => {
            console.log(error);
            return this.props.navigation.navigate('ClinicaDetalhe', clinica);
        });
    }

    updateSearch = (text) => {
        let textValidator = text.toUpperCase();
        const filteredArray = this.state.originalArrayClinicas.filter((info) => {
            return info.nome.toUpperCase().includes(textValidator);
        });
        
        this.setState({
            filteredArrayClinicas: [... filteredArray],
            search: text,
        })
    }


    render(){
        return (
            <ClinicaView
                onButtonPressed={this.buttonPressed}
                updateSearch={this.updateSearch}
                search={this.state.search}
                filteredArrayClinicas={this.state.filteredArrayClinicas}
                goToClinicaDetalhes={this.goToClinicaDetalhes}
            />
        )
    }
}

export default ClinicaController;