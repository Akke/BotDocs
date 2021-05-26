import { TiChevronLeft } from "react-icons/ti";
import styles from "./_view.module.sass";

export default function View({ category, command, returnToHome, Markdown, t }) {
    return (
        <div className={styles.commandsView}>
            <div className={styles.returnPage} onClick={() => returnToHome()}>
                <div className={styles.returnPage__title}><TiChevronLeft /> {t("command_view_return")}</div>
            </div>

            <div className={styles.command}>
                <div className={styles.command__header}>
                    <h2 className={styles["command__header-name"]}>{command.name}</h2>

                    {command.aliases.length ?
                        <div className={styles["command__header-aliases"]}>
                            <ul>
                                {command.aliases.map((alias, i) => {
                                    return <li key={i}>{alias}</li>
                                })}
                            </ul>
                        </div> : ""
                    }
                </div>

                <div className={styles.command__usage}>
                    <h4>{t("command_view_usage")}</h4>

                    <div className={styles["command__usage-example"]}>
                        <span className={styles["command__usage-example__prefix"]} title={t("command_view_bot_default_prefix")}>?</span>
                        {command.usage}
                    </div>
                </div>

                <div className={styles.command__description}><Markdown>{command.description}</Markdown></div>



                {command.params.length ?
                    <div className={styles.command__arguments}>
                        <h4>{t("command_view_arguments")}</h4>

                        <ul>
                            {command.params.map((arg, i) => (
                                <li className={styles.argument} key={i}>
                                    <div className={styles.argument__header}>
                                        <div className={styles["argument__header-name"]}>{arg.name}</div>
                                        <div className={styles["argument__header-type"]}>{arg.type}</div>
                                        {arg.required ? <div className={styles["argument__header-required"]}>{t("command_view_argument_required")}</div> : ""}
                                    </div>

                                    <div className={styles.argument__description}>{arg.description}</div>
                                </li>
                            ))}
                        </ul>
                    </div> : ""
                }

            </div>
        </div>
    );
}
