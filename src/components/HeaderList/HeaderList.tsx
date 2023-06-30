import React from "react";
import { Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import {  HeaderListItem } from "@/components";
import { HeaderListProps } from "@/types";
import { useEditor } from "@/contexts";


export const HeaderList: React.FC<HeaderListProps> = (props) => {

  const {width, headers} = useEditor()

  return (
    <>
      <View
        style={{
          width: width,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-around"
        }}>
        <Text style={[props.textStyle]}>Header</Text>
        <Text style={[props.textStyle]}>Value</Text>
      </View>
      <View style={{ minHeight: 2 }}>
        <FlashList
          estimatedItemSize={10}
          renderItem={({ item }) => <HeaderListItem width={width} textStyle={props.textStyle} header={item} />}
          data={headers}
        />
      </View>
    </>
  );
};
