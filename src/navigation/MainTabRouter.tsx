import React from "react";
import {BottomTabNavigationOptions, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {IndexDrawer} from "@/navigation/IndexDrawer";
import {useTheme} from "@/hooks/useTheme";
import {dark, light} from "@/styles";
import ThankYou from "@/screens/ThankYou";
import {SvgXml} from "react-native-svg";
import {http} from "@/assets/svg";
import {Text, TextStyle, View, ViewStyle} from "react-native";
import {useDimension} from "@/hooks";

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const MainTabRouter = () => {
    const {darkMode} = useTheme()
    const {width} = useDimension()

    const tabBarStyle: ViewStyle = {
        ...[darkMode ? dark : light][0].bottomTab,
        borderTopWidth: 0
    }
    const tabBarActiveBackgroundColor = [darkMode ? dark : light][0].BUTTON
    const ScreenOptions: BottomTabNavigationOptions = {
        headerShown: false,
        tabBarStyle: tabBarStyle,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: tabBarActiveBackgroundColor,
        tabBarItemStyle: {
            flex: 1
        },
        tabBarIconStyle: {
            width: width / 2
        },
    };

    const textStyle: TextStyle = {
        ...[darkMode ? dark : light][0].text
    }
    const iconFill = [darkMode ? dark : light][0].TEXT

    return (
        <Tab.Navigator screenOptions={ScreenOptions}>
            <Tab.Screen
                name={"IndexDrawer"}
                component={IndexDrawer}
                options={{
                    title: "RESTful Tester",
                    tabBarIcon: () => <SvgXml xml={http} width={"100%"} height={"100%"} fill={iconFill}/>,
                    tabBarActiveBackgroundColor: tabBarActiveBackgroundColor
                }}
            />
            <Tab.Screen
                name={"ThankYou"}
                component={ThankYou}
                options={{
                    title: "Thank You",
                    tabBarIcon: () => (
                        <View>
                            <Text style={textStyle}>ThankYou</Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
};
