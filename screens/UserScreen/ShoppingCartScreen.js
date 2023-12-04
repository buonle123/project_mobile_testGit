import { View, Text, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SelectList } from 'react-native-dropdown-select-list';
import ItemCart from '../../components/ItemCart';
import Ionicon from 'react-native-vector-icons/Ionicons'
import { CartProduct } from '../../context/context';
const { width, height } = Dimensions.get('window')


export default function ShoppingCartScreen({navigation}) {

  const { cart, setCart } = CartProduct();
  const [selectType, setSelectType] = useState('Tất cả');
  const updateSelectType = (it) => {
    setSelectType(it)
  }
  useEffect(() => {
    setAmount(() => {
      let amount = 0;
      cart.forEach((item, i) => {
        amount += item.product.priceNew * item.quantity
      })
      return amount;
    })
  }, [cart])
  const [totalAmount, setAmount] = useState(() => {
    let amount = 0;
    cart.forEach((item, i) => {
      amount += item.product.priceNew * item.quantity
    })
    return amount;
  })
  const renderCart = () => {
    console.log(cart + "haha");

    // cart.length == 0 ? (<View><Text>Null</Text></View>) : (<ItemCart product={cart[0]}/>)
    if (cart.length == 0) {
      return (
        <View><Text>Null</Text></View>
      )
    } else {
      return (cart.map((item, i) => {
        console.log(item);
        console.log(i);
        return (
          <ItemCart product={item} id={item.id} amount={totalAmount} setAmount={setAmount} />
        )
      }))
    }
  }

  const buy = ()=>{
    const c = {
      cart: cart,
      totalAmount: totalAmount
    }
    navigation.navigate("OrderScreen", { CartItem: c });
  }





  return (
    <View className='flex-1'>
      <View style={{ width: width }} className='h-5 flex-row items-center justify-center p-2 bg-slate-400 '>
        {/* <Text className='text-xl font-semibold text-center text-white'>Your cart</Text> */}
      </View>

      <View style={{ height: height * 0.93 }} className=''>
        <View className='w-full my-5 justify-between items-center flex-row'>
          {/* <SelectList placeholder='Tất cả' data={['Tất cả', 'Đã duyệt', 'Chưa duyệt']} setSelected={(vl) => { updateSelectType(vl) }} /> */}
          <Text className='text-lg ml-5 font-medium'>Cart</Text>
          <TouchableOpacity className='mr-5'>
            <Ionicon name='cart-outline' size={30} />
          </TouchableOpacity>
        </View>
        <View className='h-4/5 w-11/12 mx-auto rounded-xl' style={[]}>
          <ScrollView style={[{ height: "90%" }]}>
            {renderCart()}
          </ScrollView>

          
          <TouchableOpacity
            className="bg-orange-400 h-full rounded-xl mt-4"
            style={{ width: "100%", height: "10%"}}
            onPress={() => {
              
              buy()
            }}
          >
            <Text className="my-auto text-xl font-medium text-center text-white">
              {totalAmount}
            </Text>
          </TouchableOpacity>
        </View>
      </View>



    </View>
  )
}

const st = StyleSheet.create({
  shadow: {
    shadowColor: 'rgb(115, 115, 115)', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.4, shadowRadius: 5,
  }
})