import Head from "next/head";

export default function Meta() {
    return (
        <Head>
            <link rel="shortcut icon" href="/favicon/favicon.ico" />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
            <meta name="theme-color" content="#000" />
            <meta
                name="description"
                content="A complete documentation software for your Discord bot to display your bots commands and much more."
            />
        </Head>
    );
}
