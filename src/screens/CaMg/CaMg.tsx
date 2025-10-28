
import { ImageBackground,Text,View,Dimensions } from "react-native";
import backGround from '../../../assets/backGround.png';
import { StyleCaMg } from "./StyleCaMg";

//aplicar dimension para ajustar o background a tela
const {width,height}=Dimensions.get("window")


export default function CaMg(){
    return(
//criaçaõ do fundo de tela - resizede cover mantem as proporções
<ImageBackground source={backGround} resizeMode="cover" style={{flex:1, width:width,  height:height}}>
    <View style={StyleCaMg.container}>
        <Text style={StyleCaMg.texto}>--Em Construção--</Text>
    </View>
</ImageBackground>


    );
}