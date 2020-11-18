import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    containerSearchBar:{
        flex: 1,
        marginTop:0,
        fontSize:10,
        paddingTop:5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#DBE8B3",
        borderWidth: null,
        borderColor: null,
        borderTopColor: null,
        borderTopWidth: null,
        borderBottomColor: null,
        borderBottomWidth: null,
    },
    inputSearchBar:{
        color: '#0073C7',
        fontSize:10, 
        height: 15,
        backgroundColor: "#fff"       
    },
    inputContainerSearchBar:{
        backgroundColor: '#80B5A5',
        height: 10,
        marginBottom: 15,
        color: 'white',
    },
    clearIconSearchBar:{
        color: 'white',
    },
    searchIconSearchBar: {
        color: 'white',
    },
    container:{
        backgroundColor:"#DBE8B3", 
        flex:1,
    },
    cardContainer:{
        flex: 1,
        borderColor: "#2C5269",
        borderWidth: 3,
        borderRadius: 3,
        backgroundColor: "#fff"
    },
    cardTitle:{
        textAlign:"center", 
        marginBottom:5
    },
    cardView:{
        alignItems: "center" 
    },
    cardImage:{
        height:150,
        width:150
    },
    cardDescricao:{
        textAlign: "justify",
        fontSize: 9
    },
    rating:{
        marginBottom: 5
    },
    header:{
        
    },
    footer:{
        marginTop: 25,
    }

    // #69A279
    // #B9D098
    // #DBE8B3
    // #E5E5E5
    // #80B5A5
    // #2C5269
    // #0073C7

});