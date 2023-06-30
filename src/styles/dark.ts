import {StyleSheet} from "react-native";

// const CONSTANTS = {
//     THEME_COLOR: "#202120",
//     DRAWER_COLOR: "#262626",
//     FIXED_COLOR_ORANGE: "#ef5b25",
//     FIXED_COLOR_BLUE: "#097bed",
//     BUTTON: "#2a2a2b",
//     BLUE_TEXT: "#367fd4",
//     TEXT: "#ffffff",
// }
const CONSTANTS = {
    THEME_COLOR: "#011627", //editor.background
    DRAWER_COLOR: "#011627", //sidebar.background
    FIXED_COLOR_ORANGE: "#ef5b25",
    FIXED_COLOR_BLUE: "#7e57c2cc",
    BUTTON: "#234d708c", //list.activeSelectionBackground
    BLUE_TEXT: "#367fd4",
    TEXT: "#d6deeb" //foreground
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
    drawer: {
        backgroundColor: CONSTANTS.DRAWER_COLOR
    }
});

export const dark = {
    ...styleSheet,
    ...CONSTANTS
}
