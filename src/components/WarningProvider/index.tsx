import React, {ReactComponentElement, useEffect} from "react";
import {View} from "react-native";
import {useAppDispatch, useAppSelector} from "@/hooks";
import {Warning} from "@/components/WarningProvider/Warning";
import {showWarning} from "@/store/slices/appSlice";
import { WarningProviderProps } from "@/types";



export const WarningProvider: React.FC<WarningProviderProps> = (props) => {
    const warning = useAppSelector(state => state.app.warning)
    const dispatch = useAppDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(showWarning(""))
        }, 6000)
    }, [warning])

    return (
        <View style={{flex: 1}}>
            {warning.length > 0 && <Warning>{warning}</Warning>}
            {props.children}
        </View>
    )
}
