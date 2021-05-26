import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import LayoutContainer from "../../components/layout/Container";
import Page from "../../components/customPages/Page";
import usePages from "../../components/customPages/usePages";

const CustomPageRoute = () => {
    const router = useRouter();

    const { pages, error } = usePages();

    const [ready, setReady] = useState(false);

    useEffect(() => {
        /**
        * Because of useRouter() being a hook, we can't always be sure that the query parameters are available at first render,
        * which would cause the application to send the user to /404. This solves that issue by waiting for the parameter to be available.
        */
        if(window.location.pathname !== "/page" && (!Object.keys(router.query).length || Object.keys(router.query).length < 1))
            setTimeout(() => setReady(true), 500);
        else
            setReady(true);
    }, [router.query])

    if(!ready || !pages)
        return null;

    const { title } = router.query;

    if(!title) {
        router.push("/404", null, { shallow: true });
        return false;
    }

    const current = pages.find(page => {
        const urlName = title[title.length-1];

        if(page.name === urlName) {
            if(title.length === 1 && (page.recursive && page.recursive[0] === "")) return true;

            const _firstPageProp = page.recursive.shift();
            const _lastTitleProp = title.pop();

            const isIdentical = (page.recursive.length == title.length) && page.recursive.every((element, i) => {
                return element === title[i];
            });

            if(isIdentical) return true;
        }

        return false;
    });

    if(!current) {
        router.push("/404", null, { shallow: true });
        return false;
    }

    return (
        <LayoutContainer>
            <Head>
                <title>BotDocs — The only bot documentation software you need.</title>
            </Head>

            <Page current={current} Markdown={ReactMarkdown} />
        </LayoutContainer>
    );
}

export default CustomPageRoute;
