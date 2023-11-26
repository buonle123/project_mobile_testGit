import { View, Text, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Image, SectionList } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import React, { useState } from 'react'
import ItemOrder from '../../components/ItemOrder';


// import InputOrder from '../../components/InputOrder';
// ItemOrder
const { width, height } = Dimensions.get('window');

export default function OrderScreen({ route, navigation }) {
  const { productItem } = route.params;

  const [showipAddress, setShowipAddress] = useState(false);

  const [address, setAddress] = useState('116 Nguyễn Huy Tưởng, Hòa Minh, Liên Chiểu, Đà Nẵng')
  const [yName, setName] = useState('Nguyễn Văn Dũng')
  const [email, setEmail] = useState('dung@123.com')
  const [phone, setPhone] = useState('0346477714')

  const ShowAddress = () => {
    setShowipAddress(!showipAddress);
    console.log(showipAddress);
  }

  const [sl, setSL] = useState(1)

  const updateSL = (vl) => {
    console.log(productItem.quantity);
    if (sl == 1 && vl == -1) return;

    if (sl >= productItem.quantity && vl == 1) return;
    setSL(sl + vl);
  }

  // const input = (place) =>{

  // }

  

  const placeAnOder = ()=>{


    const cartItem = {
      address: address,
      yName: yName,
      email: email,
      phone: phone,
      quantity: sl,
      sumPrice: sl*productItem.priceNew,
      time: new Date()
    }
    
    navigation.navigate('ShoppingCart', {cartItem: cartItem}, {popTo: 'HomeUserSC'});

  }



  return (
    <View className='flex-1 pt-5'>
      <View className='flex-row items-center w-full bg-slate-400' style={[st.shadowHeader, { height: height * 0.08 }]}>
        <TouchableOpacity className='items-center justify-center w-10 h-10 ml-4 rounded-xl bg-slate-300 ' onPress={()=>{navigation.goBack()}}>
          <Text>{<Ionicon name='chevron-back-outline' size={30} color={'white'} />}</Text>
        </TouchableOpacity>

        <View style={{ width: width - 112 }} className=''><Text className='text-xl font-semibold text-center text-white'>Đặt hàng</Text></View>
      </View>

      <View className='items-center h-full py-5' style={{ height: height * 0.83 }}>
        <View style={{ width: width }} className='items-center'>
          <ScrollView className='h-full ' style={{ width: width * 0.9 }}>
            <ItemOrder icon={<Ionicon name='location-outline' size={25} color={' rgb(234 88 12)'} />} title={'Địa chỉ nhận hàng: '} data={address} setData={setAddress}/>
            <ItemOrder icon={<Ionicon name='person-outline' size={25} color={' rgb(234 88 12)'} />} title={'Your name:'} data={yName} lable={'New Name'} setData={setName}/>
            <ItemOrder icon={<Ionicon name='at-outline' size={25} color={' rgb(234 88 12)'} />} title={'Your email address:'} data={email} lable={'New mail'} setData={setEmail}/>
            <ItemOrder icon={<Ionicon name='call-outline' size={25} color={' rgb(234 88 12)'} />} title={'Your phone number:'} data={phone} lable={'New phone number'} setData={setPhone}/>


            <View className='flex-row items-center w-full h-32 px-2 py-4 mt-5 rounded-xl' style={[st.shadow, st.container]}>
              <View>
                <Image className='w-24 h-24' source={productItem.img[0]} />
              </View>
              <View className='justify-around h-24'>
                <Text className='text-lg'>{productItem.title}</Text>
                <View className='flex-row items-center justify-center rounded-lg bg-slate-300'>
                  <TouchableOpacity onPress={() => { updateSL(-1) }}>
                    <Ionicon name='remove' size={20} />
                  </TouchableOpacity>
                  <Text className='mx-5 text-2xl'>{sl}</Text>
                  <TouchableOpacity onPress={() => { updateSL(1) }}>
                    <Ionicon name='add' size={20} />
                  </TouchableOpacity>

                </View>
              </View>
            </View>

            <TouchableOpacity className='mt-10 bg-orange-400 h-14 rounded-xl' onPress={()=>{placeAnOder()}}>
              <Text className='my-auto text-xl font-medium text-center text-white'>Tổng đơn: {(productItem.priceNew*sl).toLocaleString('en-US')}₫</Text>
            </TouchableOpacity>

          </ScrollView>

        </View>

      </View>
    </View>
  )
}


const st = StyleSheet.create({
  shadowHeader: {
    // elevation: 5, 
    shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 2,
  },
  shadow: {
    shadowColor: 'black', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.3, shadowRadius: 2, backgroundColor: 'white'
  }

})