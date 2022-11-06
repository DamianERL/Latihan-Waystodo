import React, { useState } from "react";
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
import SelectList from "react-native-dropdown-select-list";
export default function List_todo({ navigation }) {

  const [selected, setSelected] = useState("");
  const [data,setData]=useState([])

  return (

    <View>
      <Profile />

      <View className="mx-4 my-2 mt-2">
      <SelectList
          data={data}
          setSelected={setSelected}
          boxStyles={{
            borderRadius: 5,
            backgroundColor: "rgb(225,229,234)",
            borderWidth: 2,
            borderColor: "#B2B2B2",
          }}
          inputStyles={{}}
          dropdownStyles={{ backgroundColor: "gray" }}
          dropdownItemStyles={{ marginHorizontal: 10 }}
          dropdownTextStyles={{ color: "white" }}
          placeholder="Category"
          maxHeight={100}
        />
        <View className="flex mt-4 flex-row ">
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
                <Text className=" w-[240px] text-xs  ">
                  {item.desc.substring(0, 81)} ...
                </Text>
                <View className="flex mt-2 flex-row items-center ">
                  <Ionicons name="calendar-outline" size={20} color="gray" />
                  <Text className="text-xs">{item.date}</Text>
                </View>
              </Pressable>
              <View className="w-[100px] flex items-end">
                <Text className="flex justify-center text-white bg-blue-300 rounded-md py-[4px] px-[8px]">
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
