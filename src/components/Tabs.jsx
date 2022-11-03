import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
//
import Add_category from '../screens/Add_category';
import Add_list from '../screens/Add_list';
import List_todo from '../screens/List_todo';
//

const Tab = createBottomTabNavigator();
export default function MyTab() {
  return (
    <Tab.Navigator initialRouteName="Todo"
    screenOptions={({route})=>({
      headerShown:false,

      tabBarIcon:({focused})=>{
         
        let iconName;

        if(route.name == "Todo"){
          iconName = focused ? "bookmarks" : "bookmarks-outline"
        } else if(route.name == "List"){
            iconName = focused ? "duplicate" : "duplicate-outline"
        }
        else if(route.name == "Category"){
            iconName = focused ? "list-circle" : "list-circle-outline"
        }
      return <Ionicons name={iconName} size={20} color="red"/>
      },
      tabBarActiveTintColor: "red",
      tabBarInactiveTintColor: "grey"
    })
  }
    >
        <Tab.Screen
        name="Todo"
        component={List_todo}
        options={{headerShown:false}}
        />
        <Tab.Screen
        name="Category"
        component={Add_category}
        options={{headerShown:false}}
        />
        <Tab.Screen
        name="List"
        component={Add_list}
        options={{headerShown:false}}
        />
    </Tab.Navigator>
  )
}
