import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Profile from "../components/Profile";
import Input from "../components/atoms/Input";
import Do from "../components/dummy";
export default function List_todo({navigation}) {
  console.log(Do.length);
  return (
    <View>
      <Profile />

      <View className="mx-4 mt-2">
        <Input />
        <View className="flex flex-row ">
          <Input placeholder="choose date" style="w-[120px] " />
          <Input placeholder="category" style="w-[110px] mx-2 " />
          <Input placeholder="status" style="w-[110px]" />
        </View>
      </View>

      {/* <View className=" flex items-center"> */}
        {/* <SafeAreaView> */}
          {/* <ScrollView> */}
          <FlatList
              data={Do}
              // key={(item) => item.index}
              renderItem={({ item }) => ( 
                <View className="bg-blue-200 p-2 my-2 rounded-md flex flex-row  ">
                  <View className="w-[240px]">
                    <Text className="font-extrabold mb-2">{item.name}</Text>
                    <Text className=" w-[240px] text-xs bg-red-400 ">
                      {item.desc}
                    </Text>
                    <View className="flex mt-2 flex-row items-center ">
                      <Ionicons
                        name="calendar-outline"
                        size={20}
                        color="gray"
                      />
                      <Text className="text-xs">{item.date}</Text>
                    </View>
                  </View>
                  <View className="w-[100px] flex items-end">
                    <Text className="flex justify-center bg-blue-300 rounded-md p-[8px]">
                      {item.category}
                    </Text>
                    <Ionicons
                      name="md-checkmark-circle"
                      size={40}
                      color="green"
                    />
                  </View>
                </View>
              )}
            />
          {/* </ScrollView> */}
        {/* </SafeAreaView> */}
      {/* </View> */}
    </View>
  );
}
