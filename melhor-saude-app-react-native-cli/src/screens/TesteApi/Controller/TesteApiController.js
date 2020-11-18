import React from 'react';
import TesteApiView from '../View/TesteApiView';
import axios from 'axios';
import DefaultController from './../../../components/DefaultController';

class TesteApiController extends DefaultController{
    constructor(props){
        super(props);

        this.state = {

        }

        axios.get('http://melhor-saude-webservice.herokuapp.com/clinica/all')
        .then(function ({data}) {
            console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render(){
        return(
            <TesteApiView

            />
        )
    }
}

export default TesteApiController;