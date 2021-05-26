import Link from "next/link";
import { countDeconstructedCategories } from "../../utils/json";
import styles from "./_categories.module.sass";

export default function List({ categories, commands, current, colors, t }) {
    console.log(colors)
    return (
        <div className={styles.categories}>
            <div className={styles.categories__caption}>{t("categories")}</div>

            <ul>
                {categories.map((category, i) => (
                    <Link href={`/category/${category.toLowerCase()}`} shallow={true} key={i}>
                        <li className={(current[1] ? current[1].substr(1) : null) === category.toLowerCase() ? `${styles.category} ${styles["category--active"]}` : styles.category}>
                            <div className={styles.category__title}>
                                <span className={styles["category__title-marker"]} style={{"backgroundColor": colors[category.toLowerCase()]}}></span>
                                <span>{category}</span>
                                <span className={styles["category__title-counter"]}>{countDeconstructedCategories(commands, category)}</span>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}
