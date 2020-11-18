import React from 'react';
import HomeView from '../View/HomeView';
import HomeModel from '../Model/HomeModel';
import DefaultController from './../../../components/DefaultController';

class HomeController extends DefaultController{
    constructor(props) {
        super(props);
        console.log(props);
        let arrayServicos = [];
        let arrayClinicas = [];

        this.state = {
            originalArrayServicos: [... arrayServicos],
            originalArrayClinicas: [... arrayClinicas],
            search: "",
        }

        this.homeModel = new HomeModel();
        this.props.navigation.setParams({titlePage:'MelhorSaúde'});
    }

    goToServicos = () => {
        return this.props.navigation.navigate('Servicos');
    }

    goToClinicas = () => {
        return this.props.navigation.navigate('Clinicas');
    }

    updateSearch = (text) => {
        const filteredArrayServicos = this.state.originalArrayServicos.filter((info) => {
            return info.titulo.includes(text);
        });
        
        const filteredArrayClinicas = this.state.originalArrayClinicas.filter((info) => {
            return info.titulo.includes(text);
        });
        
        this.setState({
            filteredArrayServicos: [... filteredArrayServicos],
            filteredArrayClinicas: [... filteredArrayClinicas],
            search: text,
        })

    }

    render(){
        return (
            <HomeView
                onButtonPressed={this.buttonPressed}
                updateSearch={this.updateSearch}
                search={this.state.search}
                filteredArrayServicos={this.state.originalArrayServicos}
                filteredArrayClinicas={this.state.originalArrayClfilteredArrayClinicas}
                goToServicos={this.goToServicos}
                goToClinicas={this.goToClinicas}
            />
        )
    }
}

export default HomeController;