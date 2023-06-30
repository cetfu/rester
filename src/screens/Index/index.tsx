import React, { useRef, useState } from "react";
import {
  PixelRatio,
  ScrollView,
  TextStyle,
  View,
  ViewStyle
} from "react-native";
import { useAppDispatch, useDimension } from "@/hooks";
import { useTheme } from "@/hooks/useTheme";
import { dark, light } from "@/styles";
import Lottie from "lottie-react-native";
import { Editor, HeaderList, HeaderInputs, DataSelector } from "@/components";
import { MMKV } from "react-native-mmkv";
import { wait } from "@/functions/wait";
import { TargetInput } from "@/components/HTTP/TargetInput";
import { header, selectableDataTypes } from "@/types";
import { EditorProvider } from "@/contexts";

const storage = new MMKV();

// TODO CONTROL URL WITH REGEX
const URL_REGEX = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

const dataTypeStyle: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center"
};

const IndexScreen: React.FC = () => {
  const [target, setTarget] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [headers, setHeaders] = useState<header[]>([]);
  const [headerInput, setHeaderInput] = useState<string>("");
  const [valueInput, setValueInput] = useState<string>("");
  const [editor, setEditor] = useState<string | []>("");

  const SendAnimationRef = useRef<Lottie>(null);

  const dispatch = useAppDispatch();

  const { width, height } = useDimension();
  const { darkMode, changeDarkMode } = useTheme();

  const lastEditorMode = storage.getString("app.lastEditorMode");
  // @ts-ignore
  const [currentDataType, setCurrentDataType] = useState<selectableDataTypes>(lastEditorMode ?? "formData");


  const textStyle = darkMode ? dark.text : light.text;

  const containerStyle = {
    ...[darkMode ? dark : light][0].container
  };

  const inputBgColor = [darkMode ? dark : light][0].BUTTON;

  const headerTitleStyle = {
    ...[darkMode ? dark : light][0].text,
    fontSize: 20
  };

  const textInputStyle: TextStyle = {
    flex: 1,
    backgroundColor: inputBgColor,
    marginHorizontal: 5,
    ...headerTitleStyle,
    fontSize: PixelRatio.getFontScale() * 16,
    borderRadius: 5,
    marginVertical: 10
  };

  const addHeaderStyle: ViewStyle = {
    width: width / 3,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: dark.FIXED_COLOR_BLUE, //TODO fix for theme
    marginVertical: 10,
    borderRadius: 10
  };


  const targetOnChange = React.useCallback((target: string) => {
    console.log("input change render oldu ");
    setTarget(target);
  }, [target]);

  const onContentChange = React.useCallback((content: string | []) => {
    console.log("editör change render oldu");
    setEditor(content);
  }, []);

  const changeDataType = React.useCallback((newDataType: selectableDataTypes) => {
    storage.set("app.lastEditorMode", newDataType);
    setCurrentDataType(newDataType);
  }, []);

  const onTypePress = (type: selectableDataTypes) => {
    console.log("on type change ");
    changeDataType(type);
  };

  const addHeader = () => {
    if (!(headerInput.length > 0) || !(valueInput.length > 0)) return;
    setHeaders(headers => [...headers, { header: headerInput, value: valueInput }]);
  };

  const onSendRequest = async () => {
    //TODO body, header'ları çek
    //TODO requesti gönderirken kontrol et ve warning çıkar
    try {
      SendAnimationRef.current?.play(0, 30);
      const response = await fetch(target, {
        method: "GET",
        body: null,
        headers: {}
      });
      await wait(1000);
      setSuccess(true);
      SendAnimationRef.current?.play(30, 90);
    } catch (e) {
      if (e) {
        await wait(1000);
        setSuccess(false);
        SendAnimationRef.current?.play(30, 90);
      }
    }
  };


  return (
    <EditorProvider
      width={width}
      height={height}
      darkMode={darkMode}
      headerInput={headerInput}
      valueInput={valueInput}
      setHeaderInput={setHeaderInput}
      setValueInput={setValueInput}
      addHeader={addHeader}
      headers={headers}
      currentDataType={currentDataType}
      onTypePress={onTypePress}
      targetOnChange={targetOnChange}
      target={target}
      onSendRequest={onSendRequest}
      onContentChange={onContentChange}
      success={success}
    >
      <View style={containerStyle}>
        <TargetInput ref={SendAnimationRef} />
        <ScrollView>
          <DataSelector dataTypeStyle={dataTypeStyle} />
          <Editor />
          <View style={{ flex: 1, marginVertical: 10 }}>
            <HeaderList textStyle={textStyle} />
            <HeaderInputs textInputStyle={textInputStyle} headerTitleStyle={headerTitleStyle} addHeaderStyle={addHeaderStyle} />
          </View>
        </ScrollView>
      </View>
    </EditorProvider>
  );
};

export default IndexScreen;
