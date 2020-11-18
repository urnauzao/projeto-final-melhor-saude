import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        // flexDirection:'column',
        flex:1,
        // justifyContent: 'center',
    },
    info:{
        alignItems: "center",
    },
    textInfo:{
        fontSize: 50,
        textAlign: 'center',
        color: '#3300ff'
    },
    viewButton:{
        backgroundColor: "#ff0040"
    },
    inputSearchBarStyle:{
        backgroundColor: 'white'
    },
    card:{
        flex:1, flexDirection:"row", alignItems: "center", alignSelf:"center", backgroundColor:"white", borderRadius: 5, padding: 15, minWidth:200,
        borderColor: "#2C5269",
        borderWidth: 3,
        borderRadius: 3,
    },
    cardImage:{
        height:50, width:50
    },
    cardText:{
        fontSize:26, marginLeft: 5, fontWeight:"900", color:"#0073C7", textAlign:"center"

    }



});