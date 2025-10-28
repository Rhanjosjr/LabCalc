//para funcionar o drawer import do gesture-handler
import 'react-native-gesture-handler';
import DrawerRoutes from './src/routes/drawer'
import { NavigationContainer } from '@react-navigation/native';

//import Home from './src/screens/Home/Home'
//import Salinidade from './src/screens/Salinidade/Salinidade';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerRoutes/>
    </NavigationContainer>
  );
}


