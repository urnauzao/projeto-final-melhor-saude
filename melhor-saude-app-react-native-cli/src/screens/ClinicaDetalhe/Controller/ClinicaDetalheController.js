import React from 'react';
import ClinicaDetalheView from '../View/ClinicaDetalheView';
import DefaultController from './../../../components/DefaultController';
class ClinicaDetalheController extends DefaultController{
    constructor(props) {
        super(props);

        this.state = {
            clinica:this.props.navigation.state.params.clinica,
        }

        this.props.navigation.setParams({titlePage:this.state.clinica.item.nome});
        this.props.navigation.setParams({showBackButton:true});
        
    }
    render(){
        return (
            <ClinicaDetalheView 
                clinica={this.state.clinica}
            />
        );
    }
}

export default ClinicaDetalheController;