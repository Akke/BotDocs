import Head from "next/head";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import { useAppContextProvider } from "../../contexts/AppContext";
import { useCommandContextProvider } from "../../contexts/CommandContext";
import { trimSpecialCharacters } from "../../utils/strings";
import LayoutContainer from "../../components/layout/Container";
import Categories from "../../components/categories/List";
import View from "../../components/commands/View";

const CommandRoute = () => {
    const settings = useAppContextProvider();

    const { categories, commands } = useCommandContextProvider();

    const [ready, setReady] = useState(false);

    const router = useRouter();

    useEffect(() => {
        /**
        * Because of useRouter() being a hook, we can't always be sure that the query parameters are available at first render,
        * which would cause the application to send the user to /404. This solves that issue by waiting for the parameter to be available.
        */
        if(window.location.pathname !== "/command" && (!Object.keys(router.query).length || Object.keys(router.query).length < 1))
            setTimeout(() => setReady(true), 500);
        else
            setReady(true);
    }, [router.query])

    if(!ready)
        return null; // Essentially renders a blank page. Possible todo: Loading animation?

    const { slug } = router.query;

    if(!slug) {
        router.push("/404", null, { shallow: true });
        return false;
    }

    const category = slug[0], command = slug[1];

    if(!category || !command || slug.length > 2) {
        router.push("/404", null, { shallow: true });
        return false;
    }

    const current = commands.find(cmd =>
        trimSpecialCharacters(cmd.category).toLowerCase() ===
        trimSpecialCharacters(category).toLowerCase() &&
        trimSpecialCharacters(cmd.name).toLowerCase() ===
        trimSpecialCharacters(command).toLowerCase());

    if(!current) {
        router.push("/404", null, { shallow: true });
        return false;
    }

    const returnToHome = () => router.push("/");

    return (
        <LayoutContainer>
            <Head>
                <title>BotDocs — {category}: {command}</title>
            </Head>

            <Categories
                categories={categories}
                commands={commands}
                current={window.location.pathname.split("/category")}
                colors={settings.categoryColors}
                t={settings.t}
            />

            <View
                category={category}
                command={current}
                returnToHome={returnToHome}
                Markdown={ReactMarkdown}
                t={settings.t}
            />
        </LayoutContainer>
    )
}

export default CommandRoute;
