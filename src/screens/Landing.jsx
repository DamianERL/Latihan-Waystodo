import { Image, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Buttons from "../components/atoms/Button";

export default function Landing({navigation}) {
  // console.log("tes", props);
  return (
    <View className=" flex-1 items-center justify-center ">
      <StatusBar />
      <View>
        <Image
          source={{
            uri: "https://res.cloudinary.com/fnxr/image/upload/v1667377735/accept-request_1_conj0y.png",
          }}
          style={{ width: 260, height: 185 }}
        />
      </View>
      <View className="mt-4">
        <Text className="text-[35px] font-extrabold ">
          Ways
          <Text className=" text-red-700"> To</Text>
          <Text className="text-red-400">DO</Text>
        </Text>
      </View>
      <View className="flex mt-10    justify-center items-center">
        <Text className="font-medium">
          Write your activity and finish your activity
        </Text>
        <Text className="font-medium">Fast,Simple and Easy to use</Text>
      </View>

      <View className="mt-10">
        <TouchableOpacity
          className=" justify-center bg-colorPrimary  items-center h-16 w-[360px] rounded-md"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-white  text-xl font-extrabold">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className=" justify-center  bg-colorSecond mt-6  items-center h-16 w-[360px] rounded-md"
          onPress={() => navigation.navigate("Register")}
        >
          <Text className="text-white  text-xl font-extrabold">Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
