import React from "react";
import {PixelRatio, Pressable, TextInput, TextStyle, View, ViewStyle} from "react-native";
import {SvgXml} from "react-native-svg";
import {web} from "@/assets/svg";
import {useTheme} from "@/hooks/useTheme";
import {dark, light} from "@/styles";
import { InputProps } from "@/types";


export const Input: React.FC<InputProps> = (props) => {

    const {darkMode} = useTheme()
    const svgFill = [darkMode ? dark : light][0].FIXED_COLOR_ORANGE

    const viewStyle: ViewStyle = {
        ...props.style,
        marginVertical: 10,
        marginHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10,
        backgroundColor: darkMode ? dark.BUTTON : light.BUTTON,

    }

    const textInputStyle: TextStyle = {
        width: "70%",
        height: 50,
        fontSize: PixelRatio.getFontScale() * 18,
        color: darkMode ? dark.TEXT : light.TEXT
    }

    return (
        <View style={viewStyle}>
            <SvgXml xml={web} width={50} height={50} fill={svgFill}/>
            <TextInput {...props} style={textInputStyle}/>
            {props.button}
        </View>
    )
}

Input.defaultProps = {
    style: {},
    button: <></>
}
