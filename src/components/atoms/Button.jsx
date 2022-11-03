import { TouchableOpacity, Text, View } from "react-native";
export default function Button({ style, text,}) {
  return (
    <View>
      <TouchableOpacity
      // onPress={()=>navigation.navigate('Login')} 
        className={`${
          style ? style : "bg-colorPrimary "
        }  justify-center items-center h-16 w-[360px] rounded-md`}
      >
        <Text className="text-white  text-xl font-extrabold">{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
