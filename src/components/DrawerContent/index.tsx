import React from "react";
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { useTheme } from "@/hooks/useTheme";
import { PixelRatio, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { dark, light } from "@/styles";

export const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const { changeDarkMode, darkMode } = useTheme();

  const textStyle: TextStyle = {
    ...[darkMode ? dark : light][0].text,
    fontSize: PixelRatio.getFontScale() * 15
  };

  const ButtonStyle: ViewStyle = {
    width: "75%",
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: darkMode ? dark.BUTTON : light.BUTTON,
    borderRadius: 10
  }


  return (
    <DrawerContentScrollView {...props}>
      <View style={{ width: "100%", height: 100, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          onPress={changeDarkMode}
          activeOpacity={0.8}
          style={ButtonStyle}>
          <Text style={textStyle}>Change to {darkMode ? "Light" : "Dark"} mode</Text>
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
