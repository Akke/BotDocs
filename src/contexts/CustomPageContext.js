import { createContext, useContext } from "react";

export const CustomPageContext = createContext({});

export const CustomPageContextProvider = ({ children, value }) => {
    return <CustomPageContext.Provider value={{}}>{children}</CustomPageContext.Provider>;
};

export const useCustomPageContextProvider = () => useContext(CustomPageContext);
