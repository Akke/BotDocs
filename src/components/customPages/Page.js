import styles from "./_page.module.sass";

export default function Page({ current, Markdown }) {
    return (
        <div className={styles.customPage}>
            <Markdown>{current.contents}</Markdown>
        </div>
    );
}
