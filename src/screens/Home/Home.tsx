
import { ImageBackground,Text,View,Dimensions } from "react-native";
import backGround from '../../../assets/backGround.png';
import {styleHome} from './StyleHome';

//aplicar dimension para ajustar o background a tela
const {width,height}=Dimensions.get("window")


export default function Home(){
    return(
//criaçaõ do fundo de tela - resizede cover mantem as proporções
<ImageBackground source={backGround} resizeMode="cover" style={{flex:1, width:width,  height:height}}>
    <View style={styleHome.container}>

        <Text style={styleHome.topo}>LabCalc</Text>
        <Text style={styleHome.texto} >App para Cálculos dos Parâmetros Analíticos em Amostras Ambientais</Text>           
   
    </View>
</ImageBackground>


    );
}