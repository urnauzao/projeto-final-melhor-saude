import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import styles from './HomeStyle';
import {Image} from 'react-native-elements';
import imageServicos from '../../../assets/images/icon_servicos.png';
import imageClinicas from '../../../assets/images/icon_clinicas.png';

const HomeView = (props) => {
    
    return (
        <SafeAreaView style={{backgroundColor:"#DBE8B3", flex:1}}>
            <ScrollView>
                <View style={styles.container}>

                    <View style={{paddingRight:50, paddingLeft:50, paddingTop: 50}}>
                        <TouchableOpacity
                            onPress={props.goToServicos}
                            title="Serviços"
                            color="white"
                            style={styles.card}
                        >
                        <Image 
                            source={imageServicos}
                            style={styles.cardImage}
                        />
                        <Text style={styles.cardText}>
                            Serviços
                        </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingRight:50, paddingLeft:50, paddingTop: 10, marginTop: 20}}>
                        <TouchableOpacity
                            onPress={props.goToClinicas}
                            title="Clínicas"
                            color="white"
                            style={styles.card}
                        >
                            <Image 
                                source={imageClinicas}
                                style={styles.cardImage}
                            />
                            <Text style={styles.cardText}>
                                Clínicas
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeView;