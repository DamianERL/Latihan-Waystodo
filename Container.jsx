// import {  Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import Home from "./src/screens/Landing";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import MyTab from "./src/components/Tabs";
import Detail_list from './src/screens/Detail_list'
const Stack = createStackNavigator();

export default function Container() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Tabs"> */}
        <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tabs"
          component={MyTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail List"
          component={Detail_list}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
