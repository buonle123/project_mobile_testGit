import { View, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import React, { useState } from 'react'
import { InputField } from '../../components';

const { width, height } = Dimensions.get('window');

export default function OrderScreen({ route, navigation }) {
  const { productItem } = route.params;

  const [showipAddress, setShowipAddress] = useState(false);

  const ShowAddress = () => {
    setShowipAddress(!showipAddress);
    console.log(showipAddress);
  }


  // const input = (place) =>{

  // }



  return (
    <View className='flex-1 pt-5'>
      <View className='flex-row items-center w-full bg-slate-400' style={[st.shadowHeader, { height: height * 0.08 }]}>
        <TouchableOpacity className='items-center justify-center w-10 h-10 ml-4 rounded-xl bg-slate-300 '>
          <Text>{<Ionicon name='chevron-back-outline' size={30} color={'white'} />}</Text>
        </TouchableOpacity>

        <View style={{ width: width - 112 }} className=''><Text className='text-xl font-semibold text-center text-white'>Đặt hàng</Text></View>
      </View>

      <View className='items-center h-full py-5' style={{ height: height * 0.83 }}>
        <View style={{ width: width * 0.9 }}>

          <View className='w-full h-auto px-2 py-4 mt-10 rounded-xl' style={[st.shadow]}>

            <View className='flex-row justify-around'>
              <View className='w-5/6'>
                <Text className='text-base' ><Ionicon name='location-outline' size={25} color={' rgb(234 88 12)'} />Địa chỉ nhận hàng:</Text>
                <Text className='pl-2'>116 Nguyễn Huy Tưởng, Hòa Minh, Liên Chiểu, Đà Nẵng</Text>
              </View>
              <View className='items-center justify-center w-10'>
                <TouchableOpacity onPress={() => { ShowAddress() }}>
                  <Ionicon name={showipAddress ? 'chevron-up' : 'create-outline'} color={'rgb(234 88 12)'} size={25} />
                </TouchableOpacity>
              </View>
            </View>
            {showipAddress && (
              <InputField></InputField>
            )}

          </View>


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