import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import localeEN from "../data/locales/en.json";
import localeET from "../data/locales/et.json";
import localeFR from "../data/locales/fr.json";
import localeJA from "../data/locales/ja.json";
import localeNL from "../data/locales/nl.json";
import localeSV from "../data/locales/sv.json";
import localeTR from "../data/locales/tr.json";
import appConfig from "../configs/app";

const resources = {
    en: {
        translation: localeEN
    },
    et: {
        translation: localeET
    },
    fr: {
        translation: localeFR
    },
    ja: {
        translation: localeJA
    },
    nl: {
        translation: localeNL
    },
    sv: {
        translation: localeSV
    },
    tr: {
        translation: localeTR
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: appConfig.locale,
    fallbackLng: appConfig.locale_fallback,
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
