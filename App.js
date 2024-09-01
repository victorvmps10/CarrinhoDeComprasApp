import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/routes';
import CarProvider from './src/contexts/car.context';
export default function App() {
  return (
    <CarProvider>
      <NavigationContainer>
        <Routes />
        <StatusBar style="auto"/>
      </NavigationContainer>
    </CarProvider>
  );
}
