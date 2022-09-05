import { View, Text } from 'react-native'
import React from 'react'

const Earnings = () => {
  return (
    <>
     <View className="flex-row mx-3 my-3 items-center justify-between">
                <Text className="text-lg font-bold">Earnings</Text>
                <Text className="text-[#1dbf73]">Details</Text>
        </View>
        <View className="w-100 mx-3 bg-white rounded-md ">
          <View className='flex-row p-1 items-center'>          
                <View className="m-2 w-40">
                  <Text className=''>Personal Balance</Text>
                  <Text className="font-bold text-lg text-[#1dbf73]">$650</Text>
                </View>
                <View className="">
                  <Text className=''>Earning in August</Text>
                  <Text className="font-bold text-lg text-[#1dbf73]">$400</Text>
                </View>
          </View>
          <View className='flex-row p-1 items-center'>          
                <View className="m-2 w-40">
                  <Text className=''>Avg. Selling Price</Text>
                  <Text className="font-bold text-lg text-[#1dbf73]">$55</Text>
                </View>
                <View className="">
                  <Text className=''>Active Orders</Text>
                  <Text className="font-bold text-lg text-[#1dbf73]">2 ($75)</Text>
                </View>
          </View>
          <View className='flex-row p-1 items-center' >          
                <View className="m-2  w-40">
                  <Text className=''>Pending Clearance</Text>
                  <Text className="font-bold text-lg text-[#1dbf73]">$0</Text>
                </View>
                <View className="">
                  <Text className=''>Cancelled Orders</Text>
                  <Text className="font-bold text-lg text-[#1dbf73]">1 ($45)</Text>
                </View>
          </View>
        </View>
    </>
  )
}

export default Earnings