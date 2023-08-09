import React from "react";

export interface IOption {
  isFullScreen: boolean;
  isDarkMode: boolean;
}

export interface IOptionContext {
  option: IOption;
  setOptionContext: React.Dispatch<React.SetStateAction<IOption>>;
}
export const OptionContext = React.createContext<IOptionContext | undefined>(
  undefined
);
