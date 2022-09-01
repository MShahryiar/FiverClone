import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/HomeScreen"
import SettingsScreen from "./screens/SettingsScreen"
import OrderScreen from "./screens/OrdersScreen"
import UserScreen from "./screens/UserScreen"
import { TailwindProvider } from "tailwindcss-react-native";
import { HomeIcon, EnvelopeIcon, ChatBubbleBottomCenterIcon, UserCircleIcon } from 'react-native-heroicons/outline';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen}
           options={{headerShown:false,title:'',tabBarIcon:HomeIcon, tabBarActiveTintColor:"#1dbf73"}}
          />
          <Tab.Screen name="Settings" component={SettingsScreen} 
           options={{headerShown:false,title:'',tabBarIcon:EnvelopeIcon, tabBarActiveTintColor:"#1dbf73"}}
          />
          <Tab.Screen name="Order" component={OrderScreen} 
           options={{headerShown:false,title:'',tabBarIcon:ChatBubbleBottomCenterIcon, tabBarActiveTintColor:"#1dbf73"}}
          />
          <Tab.Screen name="User" component={UserScreen} 
           options={{headerShown:false,title:'',tabBarIcon:UserCircleIcon, tabBarActiveTintColor:"#1dbf73"}}
          />
        </Tab.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}