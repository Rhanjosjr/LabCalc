import { StyleSheet } from "react-native";



export const StyleSalinidade = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    },
    texto:{
        position:"absolute",
        top : 60,
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'black',
        opacity: 0.8,
        width: '95%',
        paddingVertical: 20,
        //marginBottom: 70,
        borderRadius: 8,
     
    },
    label:{
        fontSize: 20,
        color: 'white',
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginBottom: 5,
        marginTop: 30,
        backgroundColor: 'black',
        opacity:0.8,
        paddingHorizontal: 10,
        borderRadius: 5,

    },
    input:{
        width: '95%',
        backgroundColor: '#ffffffcc',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#000',      
    },
    botao: {
        marginTop: 20,
        backgroundColor: 'black',
        opacity:0.9,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 10, // sombra no Android
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    resultado:{
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
        backgroundColor: 'black',
        opacity:0.9,
    },

    

})