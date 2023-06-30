import React, {useEffect, useRef, useState} from "react";
import Lottie from "lottie-react-native";
import {Text, View, PixelRatio, TextStyle} from "react-native";
import {useAppDispatch, useAppSelector} from "@/hooks";
import {dark, light} from "@/styles";
import {setIsLoading} from "@/store/slices/appSlice";
import { LoadingProps } from "@/types";



export const Loading: React.FC<LoadingProps> = props => {
    const AnimationRef = useRef<Lottie>(null);
    const isLoading = useAppSelector(state => state.app.isLoading);
    const darkMode = useAppSelector(state => state.app.darkMode);
    const [isFinished, setIsFinished] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const RunAnimate = React.useCallback(() => {
        setIsFinished(false);
        AnimationRef.current?.reset();
        AnimationRef.current?.play(0, 150);
    }, []);

    useEffect(() => {
        if (!isLoading) {
            setTimeout(() => {
                setIsFinished(true);
            }, 2000);
        } else {
            setIsFinished(false);
            setTimeout(() => {
                dispatch(setIsLoading(false));
            }, 1000);
        }
    }, [isLoading]);

    const containerStyle = darkMode ? dark.container : light.container;
    const defaultText: TextStyle = {
        marginTop: "auto",
        marginBottom: 100,
        fontSize: PixelRatio.getFontScale() * 20,
        fontWeight: "900",
    };
    const textStyle: TextStyle = darkMode
        ? {...dark.text, ...defaultText}
        : {...light.text, ...defaultText};

    return (
        <View style={containerStyle}>
            {!isFinished ? (
                <View
                    style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <Lottie
                        source={require("@lottie/happy-face-loading.json")}
                        ref={AnimationRef}
                        loop={true}
                        onLayout={() => {
                            RunAnimate();
                        }}
                    />
                    <Text style={textStyle}>Initializing Application</Text>
                </View>
            ) : (
                props.children
            )}
        </View>
    );
};

Loading.defaultProps = {
    onAnimationFinish: () => {
    },
    isLoading: true,
    children: <View/>,
};
