import { View, Text,StatusBar, Image } from 'react-native'
import React, { useState } from 'react'
import avatar from "../assets/images/avatar.jpg";
import * as Progress from 'react-native-progress';

const HomeScreen = () => {
  const [initialRating, setInitialRating] = useState(1);
  const [orderCompletion, setOrderCompletion] = useState(0.7);  
  const [responseRate, setResponseRate] = useState(1);
  const [onTimeDelivery, setOnTimeDelivery] = useState(1);

  return (
    <>
    <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
    <View>
      <View className="flex-row items-center justify-center">
        <Image
          source={{
            urI:avatar
          }}
          className="rounded-full h-10 w-10 bg-red-400"
        />
        <Text className="font-bold">
          Username
        </Text>
      </View>
      <View className="bg-gray-800">
            <View className="flex-row justify-between px-4 my-5">
                <Text className="text-white text-md font-bold">
                  Standards to Maintain
                </Text>
                <Text className="text-white">
                  ?
                </Text>
            </View>
            <View className="flex-row justify-between px-4 my-5">
                <Text className="text-white font-semibold">
                  Seller Level
                </Text>
                <Text className="text-white">
                  Top Rated Seller
                </Text>
            </View>
            <View className="flex-row justify-between px-4 my-5">
                <Text className="text-white font-semibold">
                  Next Evaluation
                </Text>
                <Text className="text-green-600 font-bold">
                  Sep, 15, 2022
                </Text>
            </View>
            <View className="flex-row justify-between px-4 my-5">
                <Text className="text-white font-semibold">
                  Response Time
                </Text>
                <Text className="text-green-600 font-bold">
                  0 Hours
                </Text>
            </View>
            <View className="flex-row justify-between px-4 my-5">
                <View className="flex-row space-x-5">
                <View>
                <Progress.Circle size={80} color="lightgreen" progress={responseRate} showsText={true} formatText={()=>responseRate*100 + " %"}/>
                <Text className="text-center text-white text-md font-bold mt-3">Response</Text>
                <Text className="text-center  font-bold text-white text-md">Rate</Text>
                </View>
                <View>
                <Progress.Circle size={80} color="lightgreen" progress={orderCompletion} showsText={true} formatText={()=>orderCompletion*100 + " %"}/>
                <Text className="text-center text-white text-md font-bold mt-3">Order</Text>
                <Text className="text-center  font-bold text-white text-md">Completion</Text>
                </View>
                <View>
                <Progress.Circle size={80} color="lightgreen" progress={onTimeDelivery} showsText={true} formatText={()=>onTimeDelivery*100+ " %"}/>
                <Text className="text-center text-white text-md font-bold mt-3">On-Time</Text>
                <Text className="text-center  font-bold text-white text-md">Delivery</Text>
                </View>
                <View>
                <Progress.Circle size={80} color="lightgreen"  progress={initialRating} showsText={true} formatText={()=>initialRating/2*10}/>
                <Text className="text-center text-white text-md font-bold mt-3">Positive</Text>
                <Text className="text-center  font-bold text-white text-md">Rating</Text>
                </View>
                </View>
            </View>
      </View>
    </View>
    </>
  )
}

export default HomeScreen