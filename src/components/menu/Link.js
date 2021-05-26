import Link from "next/link";
import styles from "./_menu.module.sass";

export default function Links({ content, path, active, dropdownItems, children }) {
    return (
        <div className={`${styles.links__item} ${active ? styles["links__item--active"] : ""} ${dropdownItems ? styles["links__item--hasDropdown"] : ""}`} key={path}>
            <Link href={path}>
                <div className={styles["links__item-anchor"]}>
                    {children}{dropdownItems ? <span className={styles.caret}></span> : ""}
                </div>
            </Link>

            {dropdownItems ?
                <div className={styles.dropdown}>
                    {dropdownItems.map((item, i) => {
                        return <Link href={item.props.path} shallow={true} key={i}>{item.props.children}</Link>
                    })}
                </div>
            : ""}
        </div>
    );
}
