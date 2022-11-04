import React from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import DatePicker from "@dietime/react-native-date-picker";

export default function Date({date,setDate,}) {
  return (
    <View  >
      <DatePicker
        value={date}
        onChange={(value) => setDate(value)}
        format="yyyy-mm-dd"
      />
    </View>
  );
}
