import React, {useEffect} from "react";
import {useAppDispatch} from "@/hooks";
import {setDarkMode, setIsLoading} from "@/store/slices/appSlice";
import {Loading} from "@/components";
import {MMKV} from "react-native-mmkv";
import { NavigationProviderProps } from "@/types";

const storage = new MMKV();


export const LoadingProvider: React.FC<NavigationProviderProps> = ({
                                                                       children,
                                                                   }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        (async () => {
            //TODO use dispatch(initState) when after add i18n
            //TODO save preferred language.
            const darkMode = storage.getBoolean("app.darkMode");
            dispatch(setDarkMode(darkMode ?? false));
            dispatch(setIsLoading(false));
        })();
    }, []);

    return <Loading>{children}</Loading>;
};
