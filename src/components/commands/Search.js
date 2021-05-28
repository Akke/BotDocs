import { TiZoom } from "react-icons/ti";
import { FiSearch } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import styles from "./_commands.module.sass";

export default function Search({ onSearch, isCategoryActive, currentCategory, t }) {
    const categoryTagRef = useRef();

    const [dimensions, setDimensions] = useState({ width: 0 });

    useEffect(() => {
        if(categoryTagRef.current) {
            setDimensions({
                width: categoryTagRef.current.offsetWidth
            });
        }
    }, [currentCategory]);

    return (
        <div className={`${styles["commands__search"]} ${isCategoryActive ? styles["commands__search--isCategory"] : null}`} onKeyDown={(input) => onSearch(input.target.value)}>
            <div className={styles["commands__search-icon"]}><FiSearch /></div>
            {currentCategory ? <div className={styles.currentCategory} ref={categoryTagRef}>{currentCategory}</div> : null}

            <input type="text" className={styles["commands__search-input"]} style={{"paddingLeft": currentCategory ? (dimensions.width + 30 + "px") : "1em"}} placeholder={t("search_placeholder")} />
        </div>
    );
}
