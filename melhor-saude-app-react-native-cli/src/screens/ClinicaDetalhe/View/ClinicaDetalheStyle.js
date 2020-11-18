import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        backgroundColor:"#DBE8B3", 
        flex:1,
    },
    containerFlat:{
        paddingTop:10,
        paddingLeft:5,
        paddingRight:5,
        fontSize:10,
        flex:1,
        textAlign:"center",
    },
    headerContainer:{
        flex:1,
        backgroundColor: "white",
        padding:10,
        borderRadius:5,
    },
    headerBody:{
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center"
    },
    headerImage:{
        height:100,
        flex: .5,
    },
    headerBodyText:{
        flex:1,
        textAlign:"justify",
        fontSize:10,
        paddingLeft: 5,
        color: "#2C5269"
    },
    headerTitleText:{
        flex:1,
        color: '#0073C7',
        fontSize: 12,
        fontWeight:"700",
    },
    buttonCallWhatsapp:{
        flex:1,
        marginTop: 10,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection:"row",
        backgroundColor: "#0073C7",
        justifyContent:"center",
        textAlignVertical:"center",
        textAlign:"center",
        alignItems:"center",
        borderRadius:5,
    },
    buttonCallPhone:{
        flex:1,
        marginTop: 10,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection:"row",
        backgroundColor: "#69A279",
        justifyContent:"center",
        textAlignVertical:"center",
        textAlign:"center",
        alignItems:"center",
        borderRadius:5,
    },    
    footer:{
        flex:1,
        padding:10,
        borderRadius:5,
        marginTop:15,
        marginBottom:15,
        flexDirection: "row",
        backgroundColor: "white",
        color:"#2C5269",
    },
    footerContent:{
        paddingLeft:10,
        fontSize:10,
        flex:1,
        textAlign:"center",
        color:"#2C5269",
    },
    footerContentTitle:{
        textAlign:"center",
        fontSize:12,
        marginTop:10,
        color:"#0073C7",                    
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
        color:"#2C5269",
    },
    cardMedicoView:{
        flex:1,
        flexDirection:"row",
        alignItems: "stretch"
    },
    cardMedicoText:{
        marginBottom: 10,
        flex:2,
        fontSize:10
    },
    cardMedicoImage:{
        flex:1,
        height:70
    },
    cardWithoutMedico:{
        flex:1,
        textAlign:"center",
        color: "#777777",
        fontSize:10
    }


});