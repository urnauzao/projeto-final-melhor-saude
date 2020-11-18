import React from 'react';
import { FlatList, Image, Linking, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import { Card, Icon } from 'react-native-elements';
import styles from './ClinicaDetalheStyle';
import imagemMedicoPadrao from './../../../assets/images/doctor_default.png';

const renderMedico = (medico) => {
    medico = medico.item;
    let medicoFoto = {uri:medico.foto} || imagemMedicoPadrao ;

    return (
        <Card containerStyle={styles.cardContainer}>
            <Card.Title styles={styles.cardTitle}>{medico.nome}</Card.Title>
            <View style={styles.cardMedicoView}>
                <Text style={styles.cardMedicoText}>
                    Especialista: {medico.especializacao}
                    {'\n'}
                    Idade: {medico.idade} 
                    {'\n'}Custo da consulta: R$ {medico.preco_consulta}
                </Text>
                <Image source={medicoFoto} style={styles.cardMedicoImage}/>
            </View>
            {renderButtonCallWhatsapp(medico)}
        </Card>
    )
}
 
const renderEmptyMedico = () => {
    return (
        <Card containerStyle={styles.cardContainer}>
            <View style={styles.cardMedicoView}>
                <Text style={styles.cardWithoutMedico}>
                    Nenhum médico cadastrado para esta clínica!
                </Text>
            </View>
        </Card>
    );
}

const renderButtonCallPhone = (item) => {
    let phoneNumber = item.whatsapp;
    if(!phoneNumber || phoneNumber == 'null')
    return (
        <Text style={{color:"grey", fontSize: 10, textAlign: "center", flex: 1}}>
            Telefone indisponível!
        </Text>
    );

    return(
        <TouchableOpacity 
            style = {styles.buttonCallPhone} 
            onPress = {() => { return Linking.openURL(`tel:${phoneNumber}`) }}
        > 
            <Icon
                size={10}
                name='phone'
                type='font-awesome'
                color='white'
                style={{marginRight:5}}
            />
            <Text style={{color:"white"}}>
                Ligar Agora!
            </Text>
        </TouchableOpacity>
    )
}

const renderButtonCallWhatsapp = (objeto, texto = "Enviar Mensagem via Whatsapp") => {
    if(!objeto.whatsapp)
    return (
        <Text style={{color:"grey", fontSize: 10}}>
            Whatsapp indisponível!
        </Text>
    );


    return(
        <TouchableOpacity 
            style = {styles.buttonCallWhatsapp} 
            onPress = {() => 
                Linking.canOpenURL("whatsapp://send?Text=oi").then(supported => { 
                    if (supported) { 
                        return Linking.openURL ( 
                            "whatsapp://send?phone="+objeto.whatsapp+"&text=Oi" 
                        ); 
                    } else { 
                        return Linking.openURL ( 
                            "https://api.whatsapp.com/send?phone="+objeto.whatsapp+"&text=Oi" 
                        ); 
                    } 
                }).catch((error)=>{
                    alert("Não foi possível concluir esta ação!");
                })
            }
        > 
            <Icon
                size={10}
                name='whatsapp'
                type='font-awesome'
                color='white'
                style={{marginRight:5}}
            />
            <Text style={{color:"white"}}>
                {texto}
            </Text>
        </TouchableOpacity>
    )
}

const renderHeader = (props) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerBody}
            >
                <Image
                    style={styles.headerImage}
                    resizeMode="cover"
                    source={{uri: props.clinica.item.url_imagem}}
                />
                <Text style={styles.headerBodyText}>
                    <Text style={styles.headerTitleText}>{props.clinica.item.nome}</Text>
                    {'\n'}
                    {props.clinica.item.descricao}               
                </Text>
            </View>
            {renderButtonCallWhatsapp(props.clinica.item, 'Whatsapp Clínica')}
            {renderButtonCallPhone(props.clinica.item )}
        </View>
    );
}

const renderFooter = (props) => {
    let complemento =  "";
    if(props.clinica.item.complemento != 'null' && props.clinica.item.complemento != null)
        complemento = "Complemento: "+props.clinica.item.complemento+"\n";

    return(
            <View style={styles.footer}>
                <Text style={styles.footerContent}>
                    <Text style={styles.footerContentTitle}>
                        Endereço:
                    </Text>
                {"\n"}
                {"Endereço: "+ props.clinica.item.logradouro}
                {"\n"}
                {"Número: "+ props.clinica.item.num_endereco }
                {"\n"}
                {complemento} 
                {"CEP: "+ props.clinica.item.cep}
                {"\n"}
                {"Cidade: "+ props.clinica.item.cidade}
                {"\n"}
                {"Bairro: "+ props.clinica.item.bairro}
                {"\n"}
                {"Estado: "+ props.clinica.item.estado+ " - "}
                {"País: "+ props.clinica.item.pais}
                </Text>
            </View>
    );
}


const ClinicaDetalheView = (props) => {
    return(

        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.containerFlat}
                ListHeaderComponent={() => renderHeader(props)}
                ListEmptyComponent={renderEmptyMedico}
                ListFooterComponent={ () => renderFooter(props)}
                data={props.clinica.item.medicos}
                renderItem={renderMedico}
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>

    );
}

export default ClinicaDetalheView;