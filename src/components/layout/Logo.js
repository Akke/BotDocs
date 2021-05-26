import styles from "./_layout.module.sass";

export default function Logo({ url }) {
    return (
        <div className={styles.logo}>
            <img src={url} height="54" />
        </div>
    );
}
