import React from "react"
import {Modal, View} from "react-native";
import { ModalProviderProps } from "@/types";


//TODO
export const ModalProvider: React.FC<ModalProviderProps> = (props) => {
    return (
        <View style={{flex: 1}}>
            {props.children}
        </View>
    )
}
