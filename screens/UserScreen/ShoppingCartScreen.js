import { View, Text, Dimensions, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list';
import ItemCart from '../../components/ItemCart';
const { width, height } = Dimensions.get('window')


export default function ShoppingCartScreen() {

  const [selectType, setSelectType] = useState('Tất cả');
  const updateSelectType = (it) => {
    setSelectType(it)
  }

  return (
    <View className='flex-1'>
      <View style={{ height: height * 0.1, width: width }} className='flex-row items-center justify-center p-2 bg-slate-400 '>
        <Text className='text-xl font-semibold text-center text-white'>Your cart</Text>
      </View>

      <View style={{ height: height * 0.83 }} className=''>
        <View className='w-2/4 m-5'>
          <SelectList placeholder='Tất cả' data={['Tất cả', 'Đã duyệt', 'Chưa duyệt']} setSelected={(vl) => { updateSelectType(vl) }} />
        </View>
        <View className='h-4/5 w-11/12 mx-auto rounded-xl' style={[]}>
          <ScrollView>
            <ItemCart />
          </ScrollView>
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