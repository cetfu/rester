import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setDarkMode, setIsLoading } from "@/store/slices/appSlice";
import { MMKV } from "react-native-mmkv";
const storage = new MMKV();

export const useTheme = () => {
  const darkMode = useAppSelector(state => state.app.darkMode);
  const dispatch = useAppDispatch();
  const changeDarkMode = () => {
    storage.set("app.darkMode", !darkMode);
    dispatch(setIsLoading(true));
    dispatch(setDarkMode(!darkMode));
  };
  return { darkMode, changeDarkMode };
};
