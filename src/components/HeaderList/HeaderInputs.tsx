import React from "react"
import { Text, TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { HeaderInputsProps } from "@/types";
import { useEditor } from "@/contexts";


export const HeaderInputs: React.FC<HeaderInputsProps> = (props) =>{
  const {headerInput, valueInput, setHeaderInput, setValueInput, addHeader} = useEditor()
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <TextInput
          value={headerInput}
          onChangeText={text => setHeaderInput(text)}
          style={props.textInputStyle}
          placeholder={"Header"}
          placeholderTextColor={props.headerTitleStyle.color} />

        <TextInput
          value={valueInput}
          onChangeText={text => setValueInput(text)}
          style={props.textInputStyle}
          placeholder={"Value"}
          placeholderTextColor={props.headerTitleStyle.color}
        />
      </View>
      <TouchableOpacity
        onPress={addHeader}
        style={props.addHeaderStyle}>
        <Text style={props.headerTitleStyle}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}
