import { View, Text } from 'react-native'
import React from 'react'

const ToDos = () => {
  return (
    <>
       <View className="mx-3 my-3">
                <Text className="text-lg font-bold">To-Dos</Text>
        </View>
        <View className="w-100 mx-3 bg-white rounded-md mb-3 p-2 ">
          <View className='flex-row items-center justify-between'>          
                <View className="m-2">
                  <Text className='text-sm font-bold'>0 unread messages</Text>
                  <Text className="text-xs text-gray-600">Your response time is great. Keep up the good work!</Text>
                </View>
                <View className="m-2 border rounded-full py-2 px-5">
                  <Text className='text-sm'>0</Text>
                </View>
          </View>
        </View>
    </>
  )
}

export default ToDos