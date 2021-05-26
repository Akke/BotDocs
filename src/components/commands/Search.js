import { TiZoom } from "react-icons/ti";
import { FiSearch } from "react-icons/fi";
import styles from "./_commands.module.sass";

export default function Search({ onSearch, t }) {
        return (
            <div className={styles.commands__search} onKeyDown={(input) => onSearch(input.target.value)}>
                <div className={styles["commands__search-icon"]}><FiSearch /></div>

                <input type="text" className={styles["commands__search-input"]} placeholder={t("search_placeholder")} />
            </div>
        );
}
