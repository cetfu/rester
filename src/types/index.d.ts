import { Languages } from "@rivascva/react-native-code-editor/src/languages";
import { selectableDataTypes } from "@/components";
import React from "react";
import Lottie from "lottie-react-native";
import { TextInputProps, TextStyle, ViewStyle } from "react-native";

export interface header {
  header: string;
  value: string;
}

export type formData = {
  key: string,
  value: string
}

export type editor = string | formData[]

export interface EditorProps {

}


export type selectableDataTypes = "formData"
  | "json"
  | "xml"

export type Data = {
  id: selectableDataTypes,
  name: string
}

interface TargetInputProps {
  ref: React.RefObject<Lottie>;
}

interface DataSelectorProps {
  dataTypeStyle: ViewStyle;
}

interface HeaderListItemProps {
  width: number,
  textStyle: TextStyle,
  header: header
}

interface HeaderInputsProps {
  textInputStyle: TextStyle;
  headerTitleStyle: TextStyle;
  addHeaderStyle: ViewStyle;
}

interface HeaderListProps {
  textStyle: TextStyle;
}

interface InputProps extends TextInputProps {
  style?: ViewStyle,
  onChangeText: (string: string) => void,
  value: string,
  button?: React.ReactNode
}

interface LoadingProps {
  onAnimationFinish?: () => void;
  isLoading?: boolean;
  children: React.ReactNode;
}

interface NavigationProviderProps {
  children?: React.ReactNode;
}

interface ModalProviderProps {
  children: React.ReactNode;
}

interface WarningProviderProps {
  children: React.ReactNode;
}

interface WarningProps {
  children: React.ReactNode;
}

interface EditorContextType {
  width: number;
  height: number;
  darkMode: boolean;
  headerInput: string;
  valueInput: string;
  setHeaderInput: (string: string) => void;
  setValueInput: (string: string) => void;
  onTypePress: (type: selectableDataTypes) => void;
  addHeader: () => void;
  headers: header[];
  currentDataType: selectableDataTypes;
  targetOnChange: (target: string) => void;
  onSendRequest: () => void
  target: string;
  onContentChange: (content: string) => void;
  success: boolean
}

interface EditorProviderProps extends EditorContextType{
  children: React.ReactNode;
}
