import {StyleSheet} from "react-native";

const CONSTANTS = {
    THEME_COLOR: "#fff",
    DRAWER_COLOR: "#f6f8fa",
    FIXED_COLOR_ORANGE: "#ef5b25",
    FIXED_COLOR_BLUE: "#097bed",
    BUTTON: "#e2e5e9",
    BLUE_TEXT: "#367fd4",
    TEXT: "#444d56",
}


const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CONSTANTS.THEME_COLOR,
    },
    text: {
        color: CONSTANTS.TEXT,
    },
    view: {
        backgroundColor: CONSTANTS.THEME_COLOR
    },
    header: {
        backgroundColor: CONSTANTS.THEME_COLOR
    },
    bottomTab: {
        backgroundColor: CONSTANTS.THEME_COLOR
    },
    drawer: {}
});

export const light = {
    ...styleSheet,
    ...CONSTANTS
}
