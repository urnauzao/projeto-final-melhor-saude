import React from 'react';
import SideMenuView from '../View/SideMenuView';

class SideMenuController extends React.Component{
    constructor(){
        super();
    }

    goToServico = () => {
        this.props.navigation.navigate('Servicos');
    }

    goToHome = () => {
        this.props.navigation.navigate('Home');
    }

    goToClinicas = () => {
        this.props.navigation.navigate('Clinicas');
    }

    render(){
        return (
            <SideMenuView
                onButtonPressed={this.buttonPressed}
                goToClinicas={this.goToClinicas}
                goToHome={this.goToHome}
                goToServico={this.goToServico}
            />
        );
    }
}

export default SideMenuController;