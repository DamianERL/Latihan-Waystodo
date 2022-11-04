import React from "react";
import { View, Text, TextInput } from "react-native";

import SelectList from "react-native-dropdown-select-list";
export default function DropDown() {
  const [selected, setSelected] = React.useState("");
  const data = [
    { key: "1", value: "fandi" },
    { key: "2", value: "ADI" },
    { key: "3", value: "ATA" },
    { key: "4", value: "AZIS" },
  ];
  return (
    <View>
      <SelectList 
      data={data} 
      setSelected={setSelected} 
      boxStyles={{}}
      inputStyles={{}}
      dropdownStyles={{backgroundColor:"gray" }}
      dropdownItemStyles={{marginHorizontal:10}}
      dropdownTextStyles={{color:"white" }}
      placeholder=""
      maxHeight={100}
      />
    </View>
  );
}
