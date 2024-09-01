import { TouchableOpacity, View } from 'react-native';
import { Container, Dot, Title, DocText } from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { CarContext } from '../../contexts/car.context';
export default function Header({ title }) {
  const navigation = useNavigation();
  const { cart } = useContext(CarContext);
  return (
    <Container>
      <Title>{title}</Title>
      <TouchableOpacity onPress={()=>navigation.navigate('Carrinho')}>
        <AntDesign name="shoppingcart" size={30} color="black" />
        <Dot>
          <DocText>{cart.length}</DocText>
        </Dot>
      </TouchableOpacity>
    </Container>
  );
}