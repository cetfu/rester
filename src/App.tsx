import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import store from "@/store";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {MainTabRouter} from "@/navigation";
import {LoadingProvider, ModalProvider, WarningProvider} from "@/components";
import {KeyboardAvoidingView, Platform} from "react-native";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <WarningProvider>
                {/* eslint-disable-next-line react-native/no-inline-styles */}
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{flex: 1}}>
                    <GestureHandlerRootView style={{flex: 1}}>
                        <NavigationContainer>
                            <LoadingProvider>
                                <MainTabRouter/>
                            </LoadingProvider>
                        </NavigationContainer>
                    </GestureHandlerRootView>
                </KeyboardAvoidingView>
            </WarningProvider>
        </Provider>
    );
};

export default App;
