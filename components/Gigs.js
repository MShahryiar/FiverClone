import { View, Text } from 'react-native'
import React from 'react'
import { ArrowUpIcon } from "react-native-heroicons/outline"

const Gigs = () => {
  return (
    <>
    <View className="mx-3 my-3">
                <Text className="text-lg font-bold">My Gigs</Text>
        </View>
        <View className="w-100 mx-3 bg-white rounded-md mb-3 p-2 ">
        <View className='flex-row items-center justify-between'>  
                  <Text className='text-sm font-bold'>Statistics</Text>
                  <Text className="text-xs text-gray-600">Last 7 Days</Text>
          </View>
          <View className='flex-row mt-3 items-center justify-between'>  
                  <Text className='text-sm'>Impressions</Text>
                  <Text className="text-xs text-gray-600 font-bold">1.6k <ArrowUpIcon color={'#1dbf73'} className="font-bold" size={15}/></Text>
          </View>
          <View className='flex-row mt-3 items-center justify-between'>  
                  <Text className='text-sm'>Clicks</Text>
                  <Text className="text-xs text-gray-600 font-bold">500 <ArrowUpIcon color={'#1dbf73'} size={15}/></Text>

          </View>
        </View>
        </>
  )
}

export default Gigs