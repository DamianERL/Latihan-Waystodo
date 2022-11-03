import React from "react";
import { Image, View, Text } from "react-native";
export default function Profile() {
  return (
    <View className = " mt-10 px-4 flex flex-row justify-between items-center">
      <View>
        <Text>HI FANDi</Text>
        <Text>200 okelist</Text>
      </View>
      <View>
        <Image
          source={{
            uri: "https://res.cloudinary.com/fnxr/image/upload/v1661501145/14930_gcusi5.jpg",
          }}
          className="rounded-full"
          style={{ width: 50, height: 50 }}
        />
      </View>
    </View>
  );
}
