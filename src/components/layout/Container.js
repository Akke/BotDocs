import Meta from "./Meta";
import Logo from "./Logo";
import Menu from "../menu/Menu";
import { useAppContextProvider } from "../../contexts/AppContext";
import { DiGithubBadge } from "react-icons/di";
import styles from "./_layout.module.sass";
import { useTranslation } from "react-i18next";
import "../../utils/i18n";

export default function LayoutContainer({ children }) {
    const context = useAppContextProvider();

    const { t } = useTranslation();

    return (
        <>
            <Meta />

            <div className={styles.layout}>
                <Logo url={context.config.logoURL} />

                <Menu
                    customLinks={context.config.menuLinks}
                    enablePages={context.config.enablePages}
                    t={t}
                />

                <div className={styles.layout__container}>
                    {children}
                </div>

                <div className={styles.layout__footer}>
                    <div className={styles["layout__footer-copyright"]}>{t("footer_copyright_domain", { domain: window.location.host })}</div>
                    <div className={styles["layout__footer-disclaimer"]}>{t("footer_copyright_disclaimer")}</div>
                    {context.config.enableFooterCredits ? <div className={styles["layout__footer-poweredBy"]}><a href="https://github.com/Akke/BotDocs" title="Powered by BotDocs"><DiGithubBadge /> Powered by BotDocs</a></div> : null}
                </div>
            </div>
        </>
    );
}
