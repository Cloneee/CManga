import React, { useEffect, useState } from "react";
import "./App.css";
import { MainRouter } from "./routes";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { UserContext } from "./contexts/user.context";
import {
  IOption,
  IOptionContext,
  OptionContext,
} from "./contexts/optionContext";

export const App: React.FC = () => {
  const [user, setUser] = useState();
  const [option, setOptionContext] = useState({
    isFullScreen: false,
    isDarkMode: true,
  } as IOption);

  const handleUpdateUser = (data: any) => {
    setUser(data);
  };
  const optionContextValue: IOptionContext = {
    option,
    setOptionContext,
  };

  useEffect(() => {
    // @ts-ignore
    window.document
      .querySelector("html")
      .setAttribute("data-theme", option.isDarkMode ? "dark" : "light");
  }, [option.isDarkMode]);

  return (
    <ErrorBoundary>
      <OptionContext.Provider value={optionContextValue}>
        <UserContext.Provider value={[user, handleUpdateUser]}>
          <MainRouter />
        </UserContext.Provider>
      </OptionContext.Provider>
    </ErrorBoundary>
  );
};
