import { createContext, useContext } from "react";
import { useRouter } from "next/router";
import { CommandContextProvider } from "./CommandContext";
import { CustomPageContextProvider } from "./CustomPageContext";
import { useTranslation } from "react-i18next";
import AppConfig from "../configs/app";
import "../utils/i18n";

const settings = {
    listMode: AppConfig.list_mode,
    categoryColors: AppConfig.category_colors,
    enablePages: AppConfig.enable_pages,
    menuLinks: AppConfig.menu_links,
    logoURL: AppConfig.logo_url,
    t: null
};

export const AppContext = createContext(settings);

export const AppContextProvider = ({ children, value }) => {
    const router = useRouter();
    const { t } = useTranslation();

    Object.assign(settings, {
        t: t
    });

    return (
        <AppContext.Provider value={settings}>
            {router.route === "/page/[[...title]]" ?
                <CustomPageContextProvider>{children}</CustomPageContextProvider> :
                <CommandContextProvider>{children}</CommandContextProvider>}
        </AppContext.Provider>
    );
};

export const useAppContextProvider = () => useContext(AppContext);
