import {
  FlatList,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function Add_category({ navigation }) {
  const [data, setData] = React.useState("");
  const [form, setForm] = React.useState("");

  console.log(",oke",form);
  const handleonchange = (item, value) => {
    setData({
      ...data,
      [item]: value,
    });
  };
  // console.log(data);

  const handleCategory = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token === null) {
        navigation.navigate("Login");
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(data);
      // console.log("data body", body);

      const res = await axios.post(
        "https://api.kontenbase.com/query/api/v1/55677367-a1c6-49d1-9175-2f639667eab1/category",
        body,
        config
      );

      // console.log("data post", res);
    } catch (error) {
      console.log(error);
    }
  };

  const getDB = async () => {
    try {

      const res = await axios.get("https://api.kontenbase.com/query/api/v1/55677367-a1c6-49d1-9175-2f639667eab1/category?$lookup=*");
      console.log("res get",res)
      setForm(res.data)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDB();
  }, []);

  return (
    <View className="flex justify-center mt-12     items-center">
      <View>
        <View className="mb-8">
          <Text className="font-extrabold text-2xl"> Add Category</Text>
        </View>
        <TextInput
          value={data}
          placeholder="Add category . . ."
          name="category"
          className="h-16 pl-4  w-[360px] mb-8  rounded-md border-2 bg-gray-200 border-colorSecond"
          onChangeText={(value) => handleonchange("category", value)}
        />
        <TouchableOpacity
          onPress={handleCategory}
          className=" bg-colorPrimary  justify-center items-center h-16 w-[360px] rounded-md"
        >
          <Text className="text-white  text-xl font-extrabold">oke</Text>
        </TouchableOpacity>
        <Text className="text-2xl font-extrabold my-10">List Category</Text>
        <FlatList
          numColumns={3}
          data={form}
          key={(item) => item.index}
          renderItem={({ item }) => (
            <Text className=" text-sm bg-slate-600 p-2 rounded-2xl m-2">
              {item.category}
            </Text>
          )}
        />
      </View>
    </View>
  );
}
