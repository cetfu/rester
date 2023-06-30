import React from "react"
import { Pressable, Text, View, ViewStyle } from "react-native";
import { dark, light } from "@/styles";
import { allDataTypes } from "@/components";
import { DataSelectorProps } from "@/types";
import { useEditor } from "@/contexts";


export const DataSelector: React.FC<DataSelectorProps> = (props) =>{

  const {onTypePress, currentDataType, darkMode} = useEditor()
  const selectedColor = [darkMode ? dark : light][0].BUTTON;
  const unSelectedColor = [darkMode ? dark : light][0].THEME_COLOR;

  return (
    <View style={{ flexDirection: "row", height: 50 }}>
      {allDataTypes.map((data, key) => (
        <Pressable
          style={[props.dataTypeStyle, { backgroundColor: data.id === currentDataType ? selectedColor : unSelectedColor }]}
          key={key}
          onPress={() => onTypePress(data.id)}>
          <Text style={{
            ...[darkMode ? dark : light][0].text
          }}>{data.name}</Text>
        </Pressable>
      ))}
    </View>
  )
}
