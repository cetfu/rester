import React, {useEffect} from "react";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSequence,
    withTiming
} from "react-native-reanimated";
import {useDimension} from "@/hooks";
import {PixelRatio, Text, TextStyle, ViewStyle} from "react-native";
import {useTheme} from "@/hooks/useTheme";
import {dark, light} from "@/styles";
import { WarningProps } from "@/types";



export const Warning: React.FC<WarningProps> = (props) => {
    const {width, height} = useDimension()
    const right = useSharedValue(width);
    const {darkMode} = useTheme()
    const warningStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: right.value
            }
        ]
    }))

    const viewStyle: ViewStyle = {
        width: width,
        height: height / 10,
        backgroundColor: "red",
        position: "absolute",
        zIndex: 10,
        alignItems: "center",
        justifyContent: "center",
    }

    const textStyle: TextStyle = {
        ...[darkMode ? dark : light][0].text,
        fontSize: PixelRatio.getFontScale() * 20
    }

    useEffect(() => {
        right.value = withSequence(
            withTiming(-width, {
                duration: 5000,
            })
        )
    }, [])

    return (
        <Animated.View style={[viewStyle, warningStyle]}>
            <Text style={textStyle}>{props.children}</Text>
        </Animated.View>
    )
}
Warning.defaultProps = {
    children: <></>
}
