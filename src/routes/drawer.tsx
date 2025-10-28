//importação para poder criar as gavetas
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

//importaçao das screens
import Home from '../screens/Home/Home';
import Salinidade from "../screens/Salinidade/Salinidade";
import CaMg from "../screens/CaMg/CaMg";
import Nitrato from "../screens/Nitrato/Nitrato";


//esse e para usar os icones
//import { Feather } from '@expo/vector-icons';

//criando uma costante do navigator
const Drawer = createDrawerNavigator();



export default function DrawerRoutes(){
return(

    <Drawer.Navigator >
        <Drawer.Screen name="Inicio" component={Home} options={{headerTitle:"Menu"}}/>
        <Drawer.Screen name="Salinidade" component={Salinidade}/>
        <Drawer.Screen name="Nitrato" component={Nitrato}/>
        <Drawer.Screen name = "Cálcio e Magnésio" component={CaMg} />

    </Drawer.Navigator>
)
}