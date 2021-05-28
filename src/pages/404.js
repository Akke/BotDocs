import styles from "../styles/404.module.sass";

export default function Custom404() {
    return (
        <div className={styles.pageNotFound}>
            <h1 className={styles.header}>404</h1>
            <div className={styles.description}>
                <p>The page you're looking for couldn't be found — did you check under the carpet?</p>
                <div className={styles.return}><a href="/">Return to the homepage.</a></div>
            </div>
        </div>
    );
}
