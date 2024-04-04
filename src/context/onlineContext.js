import React from "react";
import { useOnline } from "../hooks/useOnline";

export const OnlineContext = React.createContext();

export const OnlineProvider = ({ children }) => {

    const onlineStatus = useOnline();
  return <OnlineContext.Provider value={onlineStatus}>{children}</OnlineContext.Provider>;
};
