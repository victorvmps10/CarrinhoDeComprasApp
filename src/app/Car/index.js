import { View, Text } from 'react-native';
import { Container, ListCart, TextCart, Dot } from './styles';
import { useContext, useEffect, useState } from 'react';
import { CarContext } from '../../contexts/car.context';
import Cart from '../../components/Cart';
import { useIsFocused } from '@react-navigation/native';

export default function Car() {
  const {cart, dataUpdate, total} = useContext(CarContext);
  const [data,setData] = useState(cart);
  const [totalData, setTotalData] = useState(total);
  useEffect(()=>{
    setData(cart);
    setTotalData(total)
  },[dataUpdate])
 return (
   <Container>
      <ListCart
      data={data}
      keyExtractor={(item)=> item.id}
      renderItem={({item})=><Cart item={item}/>}
      ListEmptyComponent={()=> <TextCart>Nada no carrinho</TextCart>}
      />
      <TextCart>Total: {totalData.toFixed(2)}</TextCart>
   </Container>
  );
}