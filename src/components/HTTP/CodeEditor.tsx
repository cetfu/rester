import { Languages } from "@rivascva/react-native-code-editor/src/languages";
import { MMKV } from "react-native-mmkv";
import React, { useState } from "react";
import { useAppDispatch } from "@/hooks";
import CodeEditor, { CodeEditorSyntaxStyles } from "@rivascva/react-native-code-editor";
import { PixelRatio } from "react-native";
import { selectableDataTypes, EditorProps } from "@/types";
import { useEditor } from "@/contexts";


const storage = new MMKV();

export const Editor: React.FC<EditorProps> = React.memo((props) => {
  const lastEditorMode = storage.getString("app.lastEditorMode");
  // @ts-ignore
  const [currentDataType, setCurrentDataType] = useState<selectableDataTypes>(lastEditorMode ?? "formData");
  const dispatch = useAppDispatch();
  const {
    width,
    height,
    darkMode,
    onContentChange,
    currentDataType: mode
  } = useEditor();

  if (mode === "formData") {
    // TODO add formdata editor
    return (
      <>
      </>
    );
  }

  return (
    <CodeEditor
      autoFocus={false}
      style={{
        fontSize: PixelRatio.getFontScale() * 17,
        inputLineHeight: 26,
        highlighterLineHeight: 26,
        width: width,
        height: height / 3
      }}
      language={mode}
      syntaxStyle={darkMode ? CodeEditorSyntaxStyles.nightOwl : CodeEditorSyntaxStyles.github}
      onChange={onContentChange}
      showLineNumbers
      initialValue={mode === "json" ? "{}" : "<></>"}
    />
  );
});

Editor.defaultProps = {
  onChange: () => {
  }
};
