import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useEffect, useState } from 'react'
import moment from 'moment/src/moment'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { dataProduct } from '../data/data'
import { Swipeable } from 'react-native-gesture-handler'



const ItemStatus = ({ title, timeOrder, product, id, amount, setAmount, pricee, list }) => {



    const price = pricee.toLocaleString("en-US")




    moment.locale('vi');
    const t = new Date()

    const [check, setCheck] = useState(false);

    // const day = t.getDay(), month = t.getMonth() + 1, year = t.getFullYear(), hour = t.getHours(), mi = t.getMinutes();
    // const fullTime = `${day}/${month}/${year} ${hour}:${mi}`

    const [showItem, setShowItem] = useState(false)


    const right = () => {
        return (
            <View className='w-1/4 h-full justify-center items-center'>
                <TouchableOpacity className='justify-center items-center w-20 h-20 rounded-xl' key={id} style={[st.shadow]} onPress={() => { deleteItemCart(id) }}>
                    <Text className='text-red-500 text-base font-semibold'>Hủy đơn</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const showProduct = () => {
        return list.map((item, i) => {
            return (
                <View style={[{ width: "100%" }]} className="justify-center items- my-1 rounded-lg my-2">
                    <View className='justify-center p-2 mx-auto' style={[st.shadow, {width: "95%"}]}>
                        <Text className='mb-4'>Sản phẩm: {item.product.title}</Text>
                        <Text className='mb-4'>Số lượng: {item.quantity}</Text>
                    </View>
                </View>
            )
        })
    }




    return (
        <Swipeable renderRightActions={right} key={id}>
            <View className=' mx-auto my-5 py-3 rounded-xl px-2 flex-row justify-between' style={[st.shadow, { width: '95%' }]}>

                <View style={[{ width: "100%" }]} >
                    <View className='flex-row justify-between items-center'>
                        <View>
                            <Text className='text-base my-1 font-semibold'>Đơn hàng: {title}</Text>
                            <Text className='text-zinc-400'>{timeOrder}</Text>
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
                        showProduct()
                    )}
                    <Text className='text-red-400 mt-5 text-xl'>price: {price}₫</Text>
                </View>
            </View>
        </Swipeable>
    )
}

const st = StyleSheet.create({
    shadow: {
        shadowColor: '#8c8c8c', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.3, shadowRadius: 7, backgroundColor: '#ffffff',
    }
})

export default ItemStatus

