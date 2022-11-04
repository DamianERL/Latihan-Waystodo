import React from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Profile from "../components/Profile";
import Do from "../components/dummy";
export default function List_todo({ navigation }) {
  console.log(Do.length);
  return (
    <View>
      <Profile />

      <View className="mx-4 my-2 mt-2">
      <TextInput
            placeholder=""
            className="  h-16 pl-4   rounded-md border-2 bg-gray-200 border-colorSecond   w-[360px] mb-8 "
          />
        <View className="flex flex-row ">
          <TextInput
            placeholder="choose date"
            className="  h-16 pl-4   rounded-md border-2 bg-gray-200 border-colorSecond  w-[120px] "
          />
          <TextInput
          name="category"
            placeholder="category"
            className="  h-16 pl-4   rounded-md border-2 bg-gray-200 border-colorSecond  w-[110px] mx-2 "
          />
          <TextInput
            placeholder="status"
            className="  h-16 pl-4   rounded-md border-2 bg-gray-200 border-colorSecond  w-[110px]"
          />
        </View>
      </View>

      <FlatList
        data={Do}
        // key={(item) => item.index}
        renderItem={({ item }) => (
          <View className="flex items-center  ">
            <View className="bg-blue-200 p-2 my-2 rounded-md flex flex-row  ">
              <Pressable
                onPress={() => navigation.navigate("Detail List", { item })}
                className="w-[240px]"
              >
                <Text className="font-extrabold mb-2">{item.name}</Text>
                <Text className=" w-[240px] text-xs bg-red-400 ">
                  {item.desc.substring(0, 81)} ...
                </Text>
                <View className="flex mt-2 flex-row items-center ">
                  <Ionicons name="calendar-outline" size={20} color="gray" />
                  <Text className="text-xs">{item.date}</Text>
                </View>
              </Pressable>
              <View className="w-[100px] flex items-end">
                <Text className="flex justify-center bg-blue-300 rounded-md p-[8px]">
                  {item.category}
                </Text>
                <Ionicons name="md-checkmark-circle" size={40} color="green" />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
