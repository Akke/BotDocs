import { createContext, useContext } from "react";
import usePages from "../components/customPages/usePages";

export const CustomPageContext = createContext({
    pages: null
});

export const CustomPageContextProvider = ({ children, value }) => {
    const { pages, error } = usePages();

    return pages ? <CustomPageContext.Provider value={{pages: pages}}>{children}</CustomPageContext.Provider> : null
};

export const useCustomPageContextProvider = () => useContext(CustomPageContext);
