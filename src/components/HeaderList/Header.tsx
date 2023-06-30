import React, { useState } from "react";
import { Text, TextStyle, View, ViewStyle } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue, withRepeat, withSequence,
  withSpring, withTiming
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { dark, light } from "@/styles";
import { useTheme } from "@/hooks/useTheme";
import { HeaderListItemProps } from "@/types";



export const HeaderListItem: React.FC<HeaderListItemProps> = (props) => {
  const startingPosition = 0;
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);
  const {darkMode} = useTheme()
  const deleteWidth = useSharedValue(0)
  const [visible, setVisible] = useState(false)

  const onGesture = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      x.value = withSpring(0)
      deleteWidth.value = withSpring(0)
    },
    onActive: (event, ctx) => {
      if(event.translationX > 0 && event.x < props.width){
        x.value = withSpring(startingPosition + props.width / 4);
        deleteWidth.value = withSpring(props.width / 3)
      } else{
        runOnJS(() =>{
          setVisible(true)
        })
        x.value = withRepeat(
          withSequence(
            withTiming(-5, {duration: 50}),
            withTiming(+5, {duration: 50}),
            withTiming(-5, {duration: 50}),
          ), 3, true
        )
        deleteWidth.value = withSpring(0)
      }
    },
    onEnd: (event, ctx) => {
      if(event.translationX < props.width / 3){
        x.value = withSpring(0)
        deleteWidth.value = withSpring(0)
        runOnJS(() =>{
          setVisible(false)
        })
      }
    },
  })

  const animatedStyle = useAnimatedStyle(() =>({
    transform: [
      {
        translateX: x.value
      }
    ]
  }))

  const animatedDeleteButtonStyle = useAnimatedStyle(() =>({
    width: deleteWidth.value
  }))

  const deleteButtonStyle: ViewStyle = {
    backgroundColor: "red",
    height: 75,
    justifyContent: "center",
    alignItems: "center",
  }
  const deleteTextStyle: TextStyle = {
    ...[darkMode? dark : light][0].text,
    fontSize: 20
  }

  return (
    <View style={{
      width: props.width,
      height: "100%",
      flexDirection: "row",
      backgroundColor: darkMode ? dark.BUTTON : light.BUTTON,
      borderColor: darkMode ? dark.DRAWER_COLOR : light.DRAWER_COLOR,
      borderWidth: 1
    }}>
      <Animated.View style={[animatedDeleteButtonStyle, deleteButtonStyle]}>
      {/* //TODO ADD DELETE STRING*/}
      </Animated.View>
      <PanGestureHandler onGestureEvent={onGesture}>
        <Animated.View style={[{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          paddingHorizontal: 20,
        }, animatedStyle]}>
          <Text style={props.textStyle}>{props.header.header}</Text>
          <Text style={props.textStyle}>{props.header.value}</Text>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

