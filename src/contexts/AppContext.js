import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CommandContextProvider } from "./CommandContext";
import { CustomPageContextProvider } from "./CustomPageContext";
import { useTranslation } from "react-i18next";
import AppConfig from "../configs/app";
import "../utils/i18n";

const context = {
    config: {
        botPrefix: AppConfig.bot_prefix,
        listMode: AppConfig.list_mode,
        categoryColors: AppConfig.category_colors,
        enablePages: AppConfig.enable_pages,
        menuLinks: AppConfig.menu_links,
        logoURL: AppConfig.logo_url,
        enableFooterCredits: AppConfig.enable_footer_credits
    },
    func: {
        t: null
    },
    middleware: {
        /**
        * @param {Object} rules Rules that has to be checked against the query paramters.
        */
        router: function(rules = {
            /**
            * @param {String} page The path of where the rules should be applied to.
            * @param {Array} requiredParams Can contain a set of objects to specify required query parameters.
            */
            page: "",
            requiredParams: []
        }) {
            const [ready, setReady] = useState(false);

            this.r = useRouter();

            this.ready = ready;

            useEffect(() => {
                if(window.location.pathname !== rules.page && (!Object.keys(this.r.query).length || Object.keys(this.r.query).length < 1)) {
                    setTimeout(() => setReady(true), 500);
                } else {
                    setReady(true);
                }
            }, [this.r.query]);

            if(this.ready && rules.requiredParams) {
                const requiredParams = rules.requiredParams[0];

                for(const param in requiredParams) {
                    if(!Object.keys(this.r.query).includes(requiredParams.param) || this.r.query[requiredParams.param].length < requiredParams.minLength) {
                        this.r.push("/404", null, { shallow: true });

                        return false
                    }
                }
            }

            return this;
        }
    }
}

export const AppContext = createContext(context);

export const AppContextProvider = ({ children, value }) => {
    const { t } = useTranslation();

    Object.assign(context.func, {
        t: t
    });

    return (
        <AppContext.Provider value={context}>
            {context.middleware.r === "/page/[[...title]]" ?
                <CustomPageContextProvider>{children}</CustomPageContextProvider> :
                <CommandContextProvider>{children}</CommandContextProvider>}
        </AppContext.Provider>
    );
};

export const useAppContextProvider = () => useContext(AppContext);
