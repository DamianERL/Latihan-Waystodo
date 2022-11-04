import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { useState } from "react";
import SelectList from "react-native-dropdown-select-list";
import Date from "../components/modal/Date";
import DatePicker from "@dietime/react-native-date-picker";


export default function Add_list({ navigation }) {
  const [date, setDate] = useState("");
  const [showModal, setShowModal] = useState(false);
  // console.log(setShowModal)
  console.log("check again", showModal);
  const [selected, setSelected] = useState("");
  const data = [
    { key: "1", value: "fandi" },
    { key: "2", value: "ADI" },
    { key: "3", value: "ATA" },
    { key: "4", value: "AZIS" },
  ];

  return (
    <View className="  flex items-center justify-center ">
      <View className="">
        <View className="my-14">
          <Text className=" font-extrabold text-2xl ">Add List</Text>
        </View>
        <TextInput
          placeholder="Name"
          className="h-16 pl-6  w-[360px] mb-2  rounded-md border-2 bg-gray-200 border-colorSecond "
        />
        <SelectList
          data={data}
          setSelected={setSelected}
          boxStyles={{
            borderRadius: 5,
            backgroundColor: "rgb(225,229,234)",
            borderWidth: 2,
            borderColor: "#B2B2B2",
          }}
          inputStyles={{}}
          dropdownStyles={{ backgroundColor: "gray" }}
          dropdownItemStyles={{ marginHorizontal: 10 }}
          dropdownTextStyles={{ color: "white" }}
          placeholder="Category"
          maxHeight={100}
        />
        <View className="flex-row justify-between">
          <Pressable
          className="h-12 mt-4 pl-6  w-[360px] mb-2  rounded-md border-2 bg-gray-200 border-colorSecond justify-center"
          >
            <Text onPress={() => setShowModal(true)}>{date ? date.toDateString() : "date"}</Text>
          </Pressable>
        </View>
        <Modal 
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            setShowModal(false);
          }}
        >
          <View className="bg-white w-[360px] rounded-lg h-80 p-2 z-50 ml-4 mt-28 ">
            <Date date={date} setDate={setDate} />
            <View >
            <Pressable className=" p-4 w-20 rounded-md h-12 items-center bg-colorSecond" onPress={() => setShowModal(false)}>
              <Text className="font-bold text-md text-white " >SAVE</Text>
            </Pressable>
            </View>
          </View>
        </Modal>
        <TextInput
          multiline
          numberOfLines={4}
          placeholder="Description"
          className="h-[200px]  pt-2 pb-[150px] pl-4 pr-4 w-[360px] mb-8 mt-2   rounded-md border-2 bg-gray-200 border-colorSecond "
        />
        <TouchableOpacity className=" justify-center  bg-colorPrimary mt-6  items-center h-16 w-[360px] rounded-md">
          <Text className="text-white  text-xl font-extrabold">Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
