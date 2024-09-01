import { Text, TouchableOpacity, View } from 'react-native';
import { Container, Name, Price, Info,Area } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useContext } from 'react';
import { CarContext } from '../../contexts/car.context';
export default function Cart({item}) {
  const {addItemCart, cart, removeItemCart, dataUpdate} = useContext(CarContext);
 return (
   <Container>
    <Info>
    <Name>{item.name}</Name>
    <Price>Quantidade: {item.amount}</Price>
    <Price>R$ {item.total.toFixed(2)}</Price>
    </Info>
    <Area>
    <TouchableOpacity onPress={()=>removeItemCart(item)}>
    <Ionicons name="remove" size={40} color="black" />
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>addItemCart(item)}>
    <Ionicons name="add" size={40} color="black" />
    </TouchableOpacity>
    </Area>
   </Container>
  );
}