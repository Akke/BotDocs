import { TiTabsOutline, TiThLarge } from "react-icons/ti";
import Link from "./Link";
import styles from "./_menu.module.sass";

export default function Menu({ customLinks, enablePages, t }) {
    return (
        <nav className={styles.menu}>
            <div className={styles.links}>
                {!customLinks.default.length ?
                    <Link path="/"><TiThLarge /> {t("commands")}</Link> :

                    customLinks.default.map((link, i) => {
                        return <Link path={link.target} key={i}>{link.name}</Link>
                    })
                }

                {enablePages && customLinks.custom_pages.length ?
                    <Link
                        path="#"
                        dropdownItems={
                            customLinks.custom_pages.map((page, i) => (
                                <Link path={page.target} key={i}>{page.name}</Link>
                            ))
                        }><TiTabsOutline /> {t("menu_link_more")}</Link>
                : null }
            </div>
        </nav>
    );
}
