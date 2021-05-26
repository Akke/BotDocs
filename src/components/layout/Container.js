import Meta from "./Meta";
import Logo from "./Logo";
import Menu from "../menu/Menu";
import { useAppContextProvider } from "../../contexts/AppContext";
import styles from "./_layout.module.sass";
import { useTranslation } from "react-i18next";
import "../../utils/i18n";

export default function LayoutContainer({ children }) {
    const settings = useAppContextProvider();

    const { t } = useTranslation();

    return (
        <>
            <Meta />

            <div className={styles.layout}>
                <Logo url={settings.logoURL} />

                <Menu
                    customLinks={settings.menuLinks}
                    enablePages={settings.enablePages}
                    t={t}
                />

                <div className={styles.layout__container}>
                    {children}
                </div>

                <div className={styles.layout__footer}>
                    <div className={styles["layout__footer-copyright"]}>{t("footer_copyright_domain", { domain: window.location.host })}</div>
                    <div className={styles["layout__footer-disclaimer"]}>{t("footer_copyright_disclaimer")}</div>
                </div>
            </div>
        </>
    );
}
