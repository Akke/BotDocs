import { TiChevronRight } from "react-icons/ti";
import Link from "next/link";
import Search from "./Search";
import styles from "./_commands.module.sass";

export default function List({ commands, mode, colors, onSearch, t }) {
    return (
        <div className={`${styles.commands} ${styles["commands--" + mode]}`}>
            <Search onSearch={onSearch} t={t} />

            {commands.map((command, i) => (
                <Link href={command.url.full} shallow={true} key={i}>
                    <div className={styles.command}>
                        <div className={styles.command__expand}><TiChevronRight /></div>

                        <div className={styles.command__context}>
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
                    </div>
                </Link>
            ))}
        </div>
    );
}
