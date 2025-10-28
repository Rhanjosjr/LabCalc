
import { ImageBackground,Text,View,Dimensions,TextInput,TouchableOpacity } from "react-native";
//necesrio controle de estado
import { useState } from "react";
import backGround from '../../../assets/backGround.png';
import { StyleSalinidade } from "./StyleSalinidade";
//aplicar dimension para ajustar o background a tela
const {width,height}=Dimensions.get("window")

//importação da operação de cálculo salinidade
import {CalcSalinidade } from "../../services/CalcSalinidade";



export default function Salinidade(){

    //define o estado iniicial das const, sua tipagem, valor inicial, e podem ser atualizadas pelos valores de set -deixei uma com a temperatura fixa de 15
    const [tempString , setTempString]=useState<string>('15');
    const [condString , setCondString] = useState<string>('');
    //const armazena o resultado obtido
    const [result , setResult]= useState<number | string | null>('')

    const calcular = () =>{
        //tenta calcular, se der erro pega o valor throw
        try{
            const resultadoFinal = CalcSalinidade(tempString,condString);
            setResult(resultadoFinal);
        } catch (error:any) {
            setResult(error.message)
        }
    }




    return(
//criaçaõ do fundo de tela - resizede cover mantem as proporções
<ImageBackground source={backGround} resizeMode="cover" style={{flex:1, width:width,  height:height}}>
    <View style={StyleSalinidade.container}>
        <Text style={StyleSalinidade.texto}>-- Cálculo da Salinidade --</Text>
        <Text style={StyleSalinidade.label}>Temperatura C:</Text>
        <TextInput style={StyleSalinidade.input} placeholder="Calibrado com 15 ºC" keyboardType="numeric" value={tempString} onChangeText={setTempString} />
        <Text style={StyleSalinidade.label}>Condutividade MicroSiemens:</Text>
        <TextInput style={StyleSalinidade.input} placeholder="Digite em microSiemens" keyboardType="numeric" value={condString} onChangeText={setCondString}  />

        <TouchableOpacity style={StyleSalinidade.botao} onPress={calcular}>
            <Text style={StyleSalinidade.textoBotao}>Calcular</Text> 
        </TouchableOpacity>

        {result !== null && (
         <Text style={StyleSalinidade.resultado}>Salinidade  : {result +'\u2030'}</Text>
)}

    </View>
</ImageBackground>


    );
}