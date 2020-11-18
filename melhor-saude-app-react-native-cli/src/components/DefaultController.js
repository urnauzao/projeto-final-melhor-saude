import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

export default class DefaultController extends React.Component{
    static navigationOptions = ({navigation}) => {
        let navigationProps = null;

        navigationProps = {
            title: navigation.getParam('titlePage', 'Tela'),
            headerTintColor: 'white',
            headerStyle:{
                backgroundColor: '#80B5A5'
            },
            
        };
        

        if(!navigation.getParam('showBackButton', false)){
            let view = (
                <TouchableOpacity 
                    onPress={ () => navigation.toggleDrawer()}>
                    <View style={
                        {
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingBottom: 10,
                            paddingTop: 10
                        }
                    }>
                        <Icon 
                            name='bars'
                            type='font-awesome'
                            color='white'
                        />
                    </View>
                </TouchableOpacity>
            );
            
            navigationProps = {... navigationProps, headerLeft: () => view};
        }
        return navigationProps;
    }
}