import React, { createContext, useContext } from "react";
import { EditorContextType, EditorProviderProps, selectableDataTypes } from "@/types";

const EditorContext = createContext<EditorContextType>({
  onContentChange(content: string): void {},
  onSendRequest(): void {},
  success: false, target: "",
  targetOnChange(target: string): void {},
  addHeader(): void {},
  darkMode: false,
  headerInput: "",
  headers: [],
  setHeaderInput(string: string): void {},
  setValueInput(string: string): void {},
  valueInput: "",
  width: 0,
  height: 0,
  currentDataType: "",
  onTypePress(type: selectableDataTypes): void {}
});

export const EditorProvider: React.FC<EditorProviderProps> = ({ children, ...props }) => {

  //TODO SORUN ÇIKARSA BURAYI DÜZELT
  // const value = {}
  return (
    <EditorContext.Provider value={props}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => useContext(EditorContext);
