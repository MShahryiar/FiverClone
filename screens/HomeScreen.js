import { View, Text,StatusBar, Image, ScrollView,RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import avatar from "../assets/images/avatar.jpg";
import * as Progress from 'react-native-progress';
import {ChevronDownIcon, QuestionMarkCircleIcon } from "react-native-heroicons/outline"
import RNRestart from 'react-native-restart';
import Gigs from '../components/Gigs';
import ToDos from '../components/ToDos';
import Earnings from '../components/Earnings';


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const HomeScreen = () => {
  const startReload = ()=> RNRestart.Restart();
  const [initialRating, setInitialRating] = useState(0);
  const [orderCompletion, setOrderCompletion] = useState(0);  
  const [responseRate, setResponseRate] = useState(0);
  const [onTimeDelivery, setOnTimeDelivery] = useState(0);
  const [details, setShowDetails] = useState(false);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh =(() => {
    setRefreshing(true);
    setInitialRating(0)
     setOrderCompletion(0)
     setResponseRate(0)
     setOnTimeDelivery(0)
     
    wait(800).then(() => setRefreshing(false));
  });


 useEffect(()=>{
    setTimeout(()=>{
     setInitialRating(0.9)
     setOrderCompletion(0.7)
     setResponseRate(0.96)
     setOnTimeDelivery(1)
    },500)
  },[refreshing])

  return (
    <>
    <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
      <View className="flex-row items-center justify-between px-2">
      <Text className="font-bold">
          Username
        </Text>
        <View className="relative">
        <Image
          source={{
            urI:avatar
          }}
          className="rounded-full h-7 w-7 my-1 bg-red-400"
        />
        <View className="absolute h-2 w-2 bg-green-400 bottom-2 rounded-full right-0">

        </View>
       
      </View>
    </View>
    <ScrollView
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
}
    >
    
      <View className="bg-gray-800">
            <View className="flex-row justify-between px-4 my-5">
                <Text className="text-white text-md font-bold">
                  Standards to Maintain
                </Text>
                <Text className="text-white">
                  <QuestionMarkCircleIcon color="white"/>
                </Text>
            </View>
            <View className="flex-row justify-between px-4 my-5">
                <Text className="text-white">
                  Seller Level
                </Text>
                <Text className="text-white">
                  Top Rated Seller
                </Text>
            </View>
            <View className="flex-row justify-between px-4 my-5">
                <Text className="text-white">
                  Next Evaluation
                </Text>
                <Text className="text-gray-400">
                  Sep, 15, 2022
                </Text>
            </View>
            <View className="flex-row justify-between px-4 my-5">
                <Text className="text-white">
                  Response Time
                </Text>
                <Text className="font-bold" style={{color:"#1dbf73"}}>
                  0 Hours
                </Text>
            </View>
            <View className="flex-row justify-between px-4 my-5">
                <View className="flex-row space-x-5">
                <View>
                <Progress.Circle size={80} color="#1dbf73" progress={responseRate} borderColor="transparent" textStyle={{color:'white', fontWeight:'bold', fontSize:20}} showsText={true} formatText={()=>responseRate*100 + " %"}/>
                <Text className="text-center text-white text-md font-bold mt-3">Response</Text>
                <Text className="text-center  font-bold text-white text-md">Rate</Text>
                </View>
                <View>
                <Progress.Circle size={80} color="#1dbf73" progress={orderCompletion} borderColor="transparent" textStyle={{color:'white', fontWeight:'bold', fontSize:20}} showsText={true} formatText={()=>orderCompletion*100 + " %"}/>
                <Text className="text-center text-white text-md font-bold mt-3">Order</Text>
                <Text className="text-center  font-bold text-white text-md">Completion</Text>
                </View>
                <View>
                <Progress.Circle size={80} color="#1dbf73" progress={onTimeDelivery} borderColor="transparent"  textStyle={{color:'white', fontWeight:'bold', fontSize:20}} showsText={true} formatText={()=>onTimeDelivery*100+ " %"}/>
                <Text className="text-center text-white text-md font-bold mt-3">On-Time</Text>
                <Text className="text-center  font-bold text-white text-md">Delivery</Text>
                </View>
                <View>
                <Progress.Circle size={80} color="#1dbf73" progress={initialRating} borderColor="transparent" textStyle={{color:'white', fontWeight:'bold', fontSize:20}}  showsText={true} formatText={()=>initialRating/2*10}/>
                <Text className="text-center text-white text-md font-bold mt-3">Positive</Text>
                <Text className="text-center  font-bold text-white text-md">Rating</Text>
                </View>
                </View>
            </View>
            <View className="flex-row justify-between border-t">
              <Text className="text-lg font-bold text-white my-3 mx-2">Reach your next level</Text>
              <Text className="text-lg font-bold text-white my-3 mx-2" onPress={()=>setShowDetails(!details)}><ChevronDownIcon color="white" /></Text>
              
            </View>
            {details && (
              <>
            <View className="border-b-red-600 my-3 items-center flex-row justify-between mx-2">
                <View>
                  <Text className="text-white font-semibold mx-2">Selling Seniority</Text>
                  <Text className="text-gray-300 font-light mx-2">Complete atleast 60 days as a seller.</Text>
                </View>
                <View>
                  <Text className="text-[#1dbf73] font-bold">60/60</Text>
                </View>
              </View>
              <View className="border-b-red-600 my-3 items-center flex-row justify-between mx-2">
                <View>
                  <Text className="text-white font-semibold mx-2">Orders</Text>
                  <Text className="text-gray-300 font-light mx-2">Receive and Complete atleast 10 orders (alltime).</Text>
                </View>
                <View>
                  <Text className="text-[#1dbf73] font-bold">7/10</Text>
                </View>
              </View>
              <View className="border-b-red-600 my-3 items-center flex-row justify-between mx-2">
                <View>
                  <Text className="text-white font-semibold mx-2">Earnings</Text>
                  <Text className="text-gray-300 font-light mx-2">Earn atleast $400 from completed orders (alltime).</Text>
                </View>
                <View>
                  <Text className="text-[#1dbf73] font-bold">$400/$400</Text>
                </View>
              </View>
              <View className="border-b-red-600 my-3 items-center flex-row justify-between mx-2">
                <View>
                  <Text className="text-white font-semibold mx-2">Days without warning</Text>
                  <Text className="text-gray-300 font-light mx-2">Avoid receiving warnings for TOS violations over the</Text>
                  <Text className="text-gray-300 font-light mx-2">course of 30 days.</Text>
                </View>
                <View>
                  <Text className="text-[#1dbf73] font-bold">30/30</Text>
                </View>
              </View>
            </>
            )}
      </View>
        <Earnings/>
        <ToDos/>
        <Gigs/>
      
      </ScrollView>
    </>
  )
}

export default HomeScreen