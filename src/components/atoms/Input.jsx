import { SafeAreaView, TextInput } from "react-native";

export default function Input({ placeholder, style }) {
  return (
    <SafeAreaView>
      <TextInput
        placeholder={placeholder}
        className={`${
          style ? style : "  w-[360px] mb-8  "
        } h-16 pl-4  w-[360px] mb-8  rounded-md border-2 bg-gray-200 border-colorSecond `}
      />
    </SafeAreaView>
  );
}
