import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

export const useDimension = () => {
  const { width: dw, height: dh } = Dimensions.get("window");
  const [width, setWidth] = useState<number>(dw);
  const [height, setHeight] = useState<number>(dh);

  useEffect(() => {
    const event = Dimensions.addEventListener("change", ({ window }) => {
      setWidth(window.width);
      setHeight(window.height);
    });

    return () => {
      event.remove();
    };
  }, []);

  return { width, height };
};
