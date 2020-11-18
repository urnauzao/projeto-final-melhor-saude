import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import styles from './ServicosStyle';
import iconClinical from '../../../assets/images/clinical_icon.jpg';
import { SearchBar, Avatar, ListItem} from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';


const header = (props, title) => {
    return(
        <View style={styles.container}>
            <SearchBar 
                placeholder="Faça uma busca aqui!"
                onChangeText={props.updateSearch}
                value={props.search}
                searchIcon={styles.searchIconSearchBar}
                clearIcon={styles.clearIconSearchBar}
                lightTheme={true}
                containerStyle={styles.containerSearchBar}
                inputStyle={styles.inputSearchBar}
                inputContainerStyle={styles.inputContainerSearchBar}
            />
        </View>
    );
}

const RenderListServicos = ({item, press}) => {
    let avatar = item.url ? {uri: item.url} : iconClinical;
    return (
        <TouchableOpacity 
            style={{padding: 0}}
        >
            <ListItem key={item.id} bottomDivider
            containerStyle={{padding:3}}>
                <Avatar source={avatar} />
                <ListItem.Content>
                <ListItem.Title>{item.nome}</ListItem.Title>
                <ListItem.Subtitle style={{fontSize:9, textAlign: "center", color: 'grey'}}>
                    Total de Clínicas: {item.total}
                </ListItem.Subtitle>
                </ListItem.Content>
                <TouchableOpacity 
                    style={{backgroundColor:"#0073C7", marginRight: 5, padding: 2.5, borderRadius: 3}}
                    onPress={ () => press(item.id)
                    }
                >
                    <ListItem.Chevron/>
                </TouchableOpacity>

            </ListItem>
        </TouchableOpacity>
    );
}

const ServicosView = (props) => {
    return (
        <SafeAreaView style={styles.container, {backgroundColor:"#DBE8B3", flex:1}}>
        <FlatList
            data={props.filteredArrayServicos}
            renderItem={
                ({item}) => <RenderListServicos item={item} 
                press={
                    () => props.goToClinicas({servico:{item}})
                }
                />
            }
            keyExtractor={item => item.id.toString()}
            nestedScrollEnabled={true}
            ListHeaderComponent={header(props, "Serviços")}
            ListFooterComponent={<View style={{marginTop: 25, height:20}}></View>}
        />
        </SafeAreaView>
    );
}

export default ServicosView;