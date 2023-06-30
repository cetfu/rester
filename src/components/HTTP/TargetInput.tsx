import React, { forwardRef, Ref, useState } from "react";
import { Pressable, ViewStyle } from "react-native";
import { dark, light } from "@/styles";
import Lottie from "lottie-react-native";
import { Input } from "@/components";
import { TargetInputProps } from "@/types";
import { useEditor } from "@/contexts";


export const TargetInput  = forwardRef<Lottie, TargetInputProps>((props, SendAnimationRef) =>{
  const {darkMode} = useEditor()
  const AnimationStyle: ViewStyle = {
    width: 45,
    height: 45
  }

  const SendStyle: ViewStyle = {
    width: 50,
    height: 50,
    backgroundColor: darkMode ? dark.BUTTON : light.TEXT,
    justifyContent: "center",
    alignItems: "center"
  }


  const {targetOnChange, onSendRequest, target, success} = useEditor()
  return (
    <Input value={target} onChangeText={targetOnChange} button={
      <Pressable onPress={onSendRequest} style={SendStyle}>
        {success ? <Lottie
          ref={SendAnimationRef}
          source={require("@lottie/sending-success.json")}
          loop={false}
          style={AnimationStyle}
        /> : <Lottie
          ref={SendAnimationRef}
          source={require("@lottie/sending-fail.json")}
          loop={false}
          style={AnimationStyle}
        />}
      </Pressable>} />
  )
})
