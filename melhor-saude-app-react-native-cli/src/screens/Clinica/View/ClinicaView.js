import React from 'react';
import styles from './ClinicaStyle';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import { Card, Rating, SearchBar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';


const header = (props) => {
    return(
        <View style={styles.header}>
            <SearchBar 
                placeholder="Faça uma busca aqui!"
                onChangeText={props.updateSearch}
                value={props.search}
                searchIcon={styles.searchIconSearchBar}
                clearIcon={styles.clearIconSearchBar}
                lightTheme={true}
                placeholderTextColor='#2C5269'
                containerStyle={styles.containerSearchBar}
                inputStyle={styles.inputSearchBar}
                inputContainerStyle={styles.inputContainerSearchBar}
            />
        </View>
    );
}

const RenderCardClinicas = ({item,press}) => {
    console.log("renderCardClinicas");
    let clinica = item;
    console.log(item);
    return (
        <TouchableOpacity onPress={()=>press(clinica)}>
            <Card key={clinica.id} containerStyle={styles.cardContainer} >
                <Card.Title style={styles.cardTitle}>
                    {clinica.nome}
                </Card.Title>
                <Rating
                        type="custom" 
                        imageSize={10}
                        ratingColor='#0073C7'
                        ratingBackgroundColor='#c8c7c8'
                        // ratingCount={Number(clinica.rating)}
                        readonly 
                        startingValue={parseFloat(clinica.rating) || 0}
                        style={styles.rating} 
                />
                {/* <Card.Divider/> */}
                <View style={styles.cardView}>
                    <Image
                        style={styles.cardImage}
                        resizeMode="cover"
                        source={{uri: clinica.url_imagem}}
                    />
                    <Text style={styles.cardDescricao}>
                        {clinica.descricao}
                    </Text>
                </View>
            </Card>
        </TouchableOpacity>
    );
}



const ClinicaView = (props) => {

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={props.filteredArrayClinicas}
                renderItem={
                    ({item}) => <RenderCardClinicas item={item} 
                    press={() => props.goToClinicaDetalhes({clinica:{item}})} />
                }
                keyExtractor={item => item.id.toString() || item[0].id.toString() }
                initialNumToRender={5}
                nestedScrollEnabled={true}
                ListHeaderComponent={header(props)}
                ListFooterComponent={<View style={styles.footer}></View>}
                initialNumToRender={5}
                initialScrollIndex={0}
            />
        </SafeAreaView>
    );
}

export default ClinicaView;