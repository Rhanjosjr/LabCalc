import { StyleSheet, } from "react-native";


export const styleHome = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',//centraliza horizontal
        justifyContent:'center',//centraliza vertical
        

    },    
    topo:{
       
         //posiçao na tela se e relativa -a algo ou absoluta
        position:'absolute',
        top:50,
        width:'95%',
        height:'10%',
        fontSize:60,
        textAlign:'center',
        color:'white',
        backgroundColor:'black',
        opacity:0.8,
        //margin:10, //margem fora do componente       
    },
    texto:{
        fontSize:25,
        color:'white',
        textAlign:'center',
        backgroundColor:'black',
        opacity:0.8,
        width:'95%',
        //padding:10, //margem dentro do componente
        //margin:10, //margem fora do componente

    },

})