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
    
  }



  return (
    <View className='flex-1 pt-5'>
      <View className='w-full items-center bg-slate-400 flex-row' style={[st.shadowHeader, { height: height * 0.08 }]}>
        <TouchableOpacity className='justify-center ml-4 items-center w-10 h-10 rounded-xl bg-slate-300 ' onPress={()=>{navigation.goBack()}}>
          <Text>{<Ionicon name='chevron-back-outline' size={30} color={'white'} />}</Text>
        </TouchableOpacity>

        <View style={{ width: width - 112 }} className=''><Text className='text-center text-xl font-semibold text-white'>Đặt hàng</Text></View>
      </View>

      <View className='h-full py-5 items-center' style={{ height: height * 0.83 }}>
        <View style={{ width: width }} className='items-center'>
          <ScrollView className=' h-full' style={{ width: width * 0.9 }}>
            <ItemOrder icon={<Ionicon name='location-outline' size={25} color={' rgb(234 88 12)'} />} title={'Địa chỉ nhận hàng: '} data={'116 Nguyễn Huy Tưởng, Hòa Minh, Liên Chiểu, Đà Nẵng'} />
            <ItemOrder icon={<Ionicon name='person-outline' size={25} color={' rgb(234 88 12)'} />} title={'Your name:'} data={'Nguyễn Văn Dũng'} lable={'New Name'} />
            <ItemOrder icon={<Ionicon name='at-outline' size={25} color={' rgb(234 88 12)'} />} title={'Your email address:'} data={'dung@123.com'} lable={'New mail'} />
            <ItemOrder icon={<Ionicon name='call-outline' size={25} color={' rgb(234 88 12)'} />} title={'Your phone number:'} data={'0346477714'} lable={'New phone number'} />


            <View className='w-full h-32 py-4 px-2 mt-5 flex-row rounded-xl items-center' style={[st.shadow, st.container]}>
              <View>
                <Image className='w-24 h-24' source={productItem.img[0]} />
              </View>
              <View className='h-24 justify-around'>
                <Text className='text-lg'>{productItem.title}</Text>
                <View className='flex-row justify-center items-center bg-slate-300 rounded-lg'>
                  <TouchableOpacity onPress={() => { updateSL(-1) }}>
                    <Ionicon name='remove' size={20} />
                  </TouchableOpacity>
                  <Text className='text-2xl mx-5'>{sl}</Text>
                  <TouchableOpacity onPress={() => { updateSL(1) }}>
                    <Ionicon name='add' size={20} />
                  </TouchableOpacity>

                </View>
              </View>
            </View>

            <TouchableOpacity className='h-14 rounded-xl bg-orange-400 mt-10' onPress={()=>{placeAnOder()}}>
              <Text className='text-center my-auto text-white text-xl font-medium'>Tổng đơn: {(productItem.priceNew*sl).toLocaleString('en-US')}₫</Text>
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