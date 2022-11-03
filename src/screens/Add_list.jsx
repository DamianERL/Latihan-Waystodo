import { View, Text } from "react-native";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";

export default function Add_list({navigation}) {
  return (
    <View className=" flex items-center justify-center ">
      <View >
        <View className="my-14" >
          <Text className=" font-extrabold text-2xl ">Add List</Text>
        </View>
        <Input placeholder="Name" />
        <Input placeholder="Category" />
        <Input placeholder="ChoiceDate" />
        <Input placeholder="Description" />
        <Button text="Add List" />
      </View>
    </View>
  );
}
