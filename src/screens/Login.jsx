import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {

  const[data,setData] =React.useState("")

  const handleOnChange =(item,value)=>{
    setData({
      ...data,
      [item]:value,
    });
  };

  const handleLogin =async ()=>{
    try {
      const config={
        headers:{
          'Content-type':'application/json'
        },
      }

      const body = JSON.stringify(data);

      const res = await axios.post("https://api.kontenbase.com/query/api/v1/55677367-a1c6-49d1-9175-2f639667eab1/auth/login",body,config)
      console.log(res)

      if(res){
        await AsyncStorage.setItem("token",res.data.token)
      }

      const value =await AsyncStorage.getItem('token')
      if (value !== null ){ 
        navigation.navigate("Tabs")
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View className=" flex-1 items-center justify-center ">
      <StatusBar />
      <Image
        source={{
          uri: "https://res.cloudinary.com/fnxr/image/upload/v1667377735/Login_Icon_l6t5zi.png",
        }}
        style={{ width: 260, height: 185 }}
      />
      <View>
        <Text className="mt-12 mb-8 text-[35px] font-extrabold ">LOGIN</Text>
        <View>
          <TextInput
          value={data}
          onChangeText={(value)=>handleOnChange("email",value)}
            name="email"
            className="h-16 pl-4  w-[360px] mb-8  rounded-md border-2 bg-gray-200 border-colorSecond "
            placeholder="Email"
          />
          <TextInput
          onChangeText={(value)=>handleOnChange("password",value)  }
          value={data}
            name="password"
            className="h-16 pl-4  w-[360px] mb-8  rounded-md border-2 bg-gray-200 border-colorSecond "
            placeholder="Password"
          />
        </View>

        <View className="mt-10 ">
          <TouchableOpacity onPress={handleLogin}  className="bg-colorPrimary justify-center items-center h-16 w-[360px] rounded-md">
            <Text className="text-white  text-xl font-extrabold">Login</Text>
          </TouchableOpacity>
          <Text className=" text-center font-extrabold mt-4">
            new Users ?{" "}
            <Text
              onPress={() => navigation.navigate("Register")}
              className="text-colorPrimary"
            >
              Register
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
