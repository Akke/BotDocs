import { TiChevronRight, TiStar } from "react-icons/ti";
import Link from "next/link";
import Search from "./Search";
import styles from "./_commands.module.sass";

export default function List({ commands, mode, colors, isCategoryActive, onSearch, t }) {
    return (
        <div className={`${styles.commands} ${styles["commands--" + mode]}`}>
            <Search onSearch={onSearch} isCategoryActive={isCategoryActive} currentCategory={isCategoryActive ? commands[0].category : null} t={t} />

            {commands.map((command, i) => (
                <Link href={command.url.full} shallow={true} key={i}>
                    <div className={styles.command}>
                        <div className={styles.command__expand}><TiChevronRight /></div>

                        <div className={`${styles["command__context"]} ${command.starred ? styles["command--starred"] : null}`}>
                            <div className={styles["command__context-title"]}>
                                <div className={styles["command__context-title__category"]} style={{"backgroundColor": colors[command.category.toLowerCase()]}}>{command.category}</div>
                                <span className={styles["command__context-title__trigger"]}>{command.name}</span>
                            </div>
                            <div className={styles["command__context-preview"]}>{command.description}</div>

                            {command.requiredPermissions.length ?
                                <div className={styles["command__context-permissions"]}>
                                    <span>{t("permissions")}</span>

                                    <ul>
                                        {command.requiredPermissions.map((permission, i) => (
                                            <li key={i}>{permission}</li>
                                        ))}
                                    </ul>
                                </div>
                            : null}
                        </div>

                        {command.starred ? <div className={styles.command__star}><TiStar /></div> : null}
                    </div>
                </Link>
            ))}
        </div>
    );
}
