import React, {useRef} from "react";
import {createDrawerNavigator, DrawerNavigationOptions, DrawerNavigationProp} from "@react-navigation/drawer";
import Index from "@/screens/Index";
import {PixelRatio, Pressable, Text, TextStyle, View, ViewStyle} from "react-native";
import {useDimension} from "@/hooks";
import {useTheme} from "@/hooks/useTheme";
import {dark, light} from "@/styles";
import Lottie from "lottie-react-native";
import {ParamListBase} from "@react-navigation/native";
import {DrawerContent} from "@/components";

const Drawer = createDrawerNavigator()

export const IndexDrawer = () => {
    const {height} = useDimension()
    const {darkMode} = useTheme()
    const LottieMenuRef = useRef<Lottie>(null)

    const textStyle: TextStyle = {
        ...[darkMode ? dark : light][0]?.text,
        fontSize: PixelRatio.getFontScale() * 15
    }
    const headerStyle: ViewStyle = {
        ...[darkMode ? dark : light][0]?.header,
        height: height / 15,
        flexDirection: "row",
        alignItems: "center",
        rowGap: 10

    }
    const drawerStyle: ViewStyle = {
        ...[darkMode ? dark : light][0]?.drawer
    }

    const headerOnPress = (navigation: DrawerNavigationProp<ParamListBase>) => {
        LottieMenuRef.current?.play(5, 30);
        setTimeout(() => {
            navigation.openDrawer()
            setTimeout(() => {
                LottieMenuRef.current?.reset()
            }, 100)
        }, 500)
    }

    const DrawerOptions: DrawerNavigationOptions = {
        header: ({navigation, options}) => {
            return (
                <View style={headerStyle}>
                    <Pressable onPress={() => {
                        headerOnPress(navigation)
                    }}>
                        <Lottie
                            ref={LottieMenuRef}
                            source={darkMode ? require("@lottie/burger-menu-darkmode.json") : require("@lottie/burger-menu-lightmode.json")}
                            style={{width: "100%", height: "100%"}}/>
                    </Pressable>
                    <Text style={textStyle}>{options.title}</Text>
                </View>
            )
        },
        drawerStyle: drawerStyle,
        drawerActiveBackgroundColor: darkMode ? dark.BUTTON : light.BUTTON,
        drawerActiveTintColor: darkMode ? dark.TEXT : light.TEXT,
        drawerItemStyle: {
            width: "100%"
        }
    }
    return (
        <Drawer.Navigator
            screenOptions={DrawerOptions}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen name={"IndexScreen"} component={Index} options={{title: "Rester"}}/>
        </Drawer.Navigator>
    )
}
