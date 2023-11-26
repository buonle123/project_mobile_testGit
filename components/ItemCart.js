import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import moment from 'moment/src/moment'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { dataProduct } from '../data/data'
import { Swipeable } from 'react-native-gesture-handler'
const ItemCart = () => {
    moment.locale('vi');
    const t = new Date()

    const day = t.getDay(), month = t.getMonth() + 1, year = t.getFullYear(), hour = t.getHours(), mi = t.getMinutes();
    const fullTime = `${day}/${month}/${year} ${hour}:${mi}`

    const [showItem, setShowItem] = useState(false)

    const right = ()=>{
        return (
            <View className='w-1/4 h-full justify-center items-center'>
                <TouchableOpacity className='justify-center items-center w-20 h-20 rounded-xl' style={[st.shadow]}>
                    {/* <Ionicon name='trash-outline' size={40} color={'red'}/> */}
                    <Text className='text-red-500 text-base font-semibold'>Hủy đơn</Text>
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <Swipeable renderRightActions={right}>
            <View className='w-11/12 mx-auto my-5 py-3 rounded-xl px-2' style={[st.shadow]}>
                <View className='flex-row justify-between items-center'>
                    <View>
                        <Text className='text-base my-1 font-semibold'>Đơn hàng: {'iPhone 14 pro max'}</Text>
                        <Text className='text-zinc-400'>{fullTime}</Text>
                    </View>
                    <View>
                        <View className='justify-center items-center w-10'>
                            <TouchableOpacity onPress={() => { setShowItem(!showItem) }}>
                                <Ionicon name={showItem ? 'chevron-up' : 'chevron-down'} color={'rgb(234 88 12)'} size={25} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {showItem && (
                    <View className='mt-4 flex-row items-center justify-center'>
                        <Image className='w-28 h-28' source={dataProduct[0].img[0]} />
                        <View className='w-3/6 justify-center'>
                            <Text className='mb-4'>Quantity: ...</Text>
                            <Text className='mb-4'>Price: ...</Text>
                            <Text>Đã duyệt đơn</Text>
                        </View>
                    </View>
                )}
                <Text className='text-red-300 mt-5'>Lưu ý: đơn hàng đã duyệt không thể hủy</Text>
            </View>
        </Swipeable>
    )
}

const st = StyleSheet.create({
    shadow: {
        shadowColor: '#8c8c8c', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.3, shadowRadius: 7, backgroundColor: '#ffffff'
    }
})

export default ItemCart

