import { Text, TouchableOpacity, View } from 'react-native';
import { Container, Name, Price, Info } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useContext } from 'react';
import { CarContext } from '../../contexts/car.context';
export default function ListProduts({item}) {
  const {addItemCart} = useContext(CarContext);
 return (
   <Container>
    <Info>
    <Name>{item.name}</Name>
    <Price>R$ {item.price}</Price>
    </Info>
    <TouchableOpacity onPress={()=>addItemCart(item)}>
    <Ionicons name="add" size={40} color="black" />
    </TouchableOpacity>

   </Container>
  );
}