import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface initialState {
    darkMode: boolean;
    lang: string;
    isLoading: boolean;
    warning: string;
}

const initialState: initialState = {
    darkMode: false,
    lang: "en-US",
    isLoading: true,
    warning: "",
};

const appSlice = createSlice({
    name: "appSlice",
    initialState,
    reducers: {
        initState: (state, action: PayloadAction<initialState>) => {
            state = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setDarkMode: (state, action: PayloadAction<boolean>) => {
            state.darkMode = action.payload;
        },
        showWarning: (state, action: PayloadAction<string>) => {
            state.warning = action.payload
        }
    },
});

export const {
    initState,
    setIsLoading,
    setDarkMode,
    showWarning
} = appSlice.actions;
export default appSlice.reducer;
