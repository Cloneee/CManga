import React from "react";

type ScreenContextType =
  | boolean
  | ((isFullscreen: React.SetStateAction<boolean>) => void);
export const ScreenContext: React.Context<ScreenContextType[]> =
  React.createContext([] as ScreenContextType[]);
