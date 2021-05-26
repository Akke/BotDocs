import { useRouter } from "next/router";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import LayoutContainer from "../../components/layout/Container";
import Page from "../../components/customPages/Page";
import usePages from "../../components/customPages/usePages";

const CustomPageRoute = () => {
    const router = useRouter();
    const { title } = router.query;
    const { pages, error } = usePages();
    if(!pages || !title) return null;

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
