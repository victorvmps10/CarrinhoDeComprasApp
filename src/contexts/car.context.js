import { createContext, useState } from 'react';
import { View } from 'react-native';

export const CarContext = createContext();

export default function CarProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [dataUpdate, setDataUpdate] = useState(new Date());
    function addItemCart(newItem){
      const indexItem = cart.findIndex(item => item.id === newItem.id)
      if(indexItem !== -1){
        let cartList = cart;
        cartList[indexItem].amount = cartList[indexItem].amount + 1;

        cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price
        setCart(cartList)
        setDataUpdate(new Date())
        let myCart = cart;
        let result = myCart.reduce((acc, obj) => { return acc + obj.total}, 0)

        setTotal(result);
        return;
      }
      let data = {
        ...newItem,
        amount: 1,
        total: newItem.price
      }
      setDataUpdate(new Date())
      setTotal(total => Number(total) + Number(data.total))
      setCart(products => [...products, data])
    }
    function removeItemCart(newItem){
      const indexItem = cart.findIndex(item => item.id === newItem.id)
      if(indexItem !== -1){
        let cartList = cart;
        cartList[indexItem].amount = cartList[indexItem].amount - 1;

        cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price
        setTotal(total => Number(total) - Number(cartList[indexItem].price))
        setCart(cartList)
        if(cartList[indexItem].amount === 0){
          cartList.splice(indexItem, 1);
        }
        setDataUpdate(new Date())
        return;
      }
    }
 return (
   <CarContext.Provider value={{ addItemCart, cart, removeItemCart, dataUpdate, total }}>
    {children}
   </CarContext.Provider>
  );
}