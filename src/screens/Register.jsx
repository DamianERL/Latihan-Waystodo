import React from "react";
import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Axios from "axios";

export default function Register({ navigation }) {
  const [form, setForm] = React.useState();

  console.log("form", form);

  const [isLoading, setLoading] = React.useState(false);

  const handleOnChange = (item, value) => {
    setForm({
      ...form,
      [item]: value,
    });
  };

  const handleRegister = async () => {
    try {

      const config={
        headers:{
          'Content-type':'application/json'
        },
      }

      const body = JSON.stringify(form);
      console.log("oke",body)

      const res = await Axios.post(
        "https://api.kontenbase.com/query/api/v1/55677367-a1c6-49d1-9175-2f639667eab1/auth/register",
        body,config
      );
      console.log("res", res);

      if (res) {
        await AsyncStorage.setItem("token", res.data.token);
      }

      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        console.log(value);
        navigation.navigate("Login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className=" flex-1 items-center justify-center ">
      <StatusBar />
      <Image
        source={{
          uri: "https://api.kontenbase.com/query/api/v1/55677367-a1c6-49d1-9175-2f639667eab1/auth/register",
        }}
        style={{ width: 260, height: 185 }}
      />
      <View>
        <Text className="mt-12 mb-8 text-[35px] font-extrabold ">REGISTER</Text>
        <View>
          <TextInput
            className="h-16 pl-4  w-[360px] mb-8  rounded-md border-2 bg-gray-200 border-colorSecond "
            onChangeText={(value) => handleOnChange("firstName", value)}
            name="firstName"
            value={form}
            placeholder="Name"
          />
          <TextInput
            className="h-16 pl-4  w-[360px] mb-8  rounded-md border-2 bg-gray-200 border-colorSecond "
            onChangeText={(value) => handleOnChange("email", value)}
            name="email"
            value={form}
            placeholder="Email"
          />
          <TextInput
            className="h-16 pl-4  w-[360px] mb-8  rounded-md border-2 bg-gray-200 border-colorSecond "
            onChangeText={(value) => handleOnChange("password", value)}
            name="password"
            value={form}
            placeholder="Password"
          />
        </View>

        <View className="mt-10 ">
          <TouchableOpacity
            className="justify-center items-center h-16 w-[360px] rounded-md bg-colorPrimary "
            onPress={handleRegister}
          >
            <Text className="text-white  text-xl font-extrabold">Register</Text>
          </TouchableOpacity>
          <Text className=" text-center font-extrabold mt-4">
            Joined us before ?
            <Text
              onPress={() => navigation.navigate("Login")}
              className="text-colorPrimary"
            >
              Login
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
