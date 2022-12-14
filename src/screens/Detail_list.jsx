import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Detail_list({ route }) {
  const item = route.params.item;

  console.log("data", item);
  return (
    <View className=" bg-blue-500 py-2 px-4 my-14 mx-8 rounded-xl ">
      <View className="flex flex-row items-center  mb-8 justify-between ">
        <View>
          <Text className="font-extrabold text-xl mt-8">{item.name}</Text>
        </View>
        <View className="w-[100px]  flex items-end">
          <Text className="flex h justify-center bg-blue-300 text-white font-bold rounded-md py-[4px] px-[8px]">
            {item.category}
          </Text>
          <Ionicons name="md-checkmark-circle" size={40} color="green" />
        </View>
      </View>
      <View>
        <Text>{item.desc}</Text>
        <View className="flex mt-8 flex-row">
          <Ionicons name="calendar-outline" size={20} color="gray" />
          <Text>{item.date}</Text>
        </View>
      </View>
    </View>
  );
}
