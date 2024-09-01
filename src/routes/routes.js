import Home from '../app/Home';
import Car from '../app/Car';
import { createStackNavigator } from '@react-navigation/stack';
export default function Routes() {
    const Stack = createStackNavigator();
 return (
   <Stack.Navigator
   >
       <Stack.Screen
       name="Home"
       component={Home}
       options={{
        headerShown: false
       }}
       /> 
       <Stack.Screen
       name="Carrinho"
       component={Car}
       />
   </Stack.Navigator>
  );
}