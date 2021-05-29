import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { useAppContextProvider } from "../../contexts/AppContext";
import { useCommandContextProvider } from "../../contexts/CommandContext";
import { trimSpecialCharacters } from "../../utils/strings";
import LayoutContainer from "../../components/layout/Container";
import Categories from "../../components/categories/List";
import View from "../../components/commands/View";

const CommandRoute = () => {
    const context = useAppContextProvider();

    const { categories, commands } = useCommandContextProvider();

    const routerMiddleware = context.middleware.router({
        page: "/command",
        requiredParams: [{
            param: "slug",
            minLength: 2
        }]
    });

    if(!routerMiddleware.ready)
        return null;

    const { slug } = routerMiddleware.r.query;

    const category = slug[0], command = slug[1];

    const current = commands.find(cmd =>
        trimSpecialCharacters(cmd.category).toLowerCase() ===
        trimSpecialCharacters(category).toLowerCase() &&
        trimSpecialCharacters(cmd.name).toLowerCase() ===
        trimSpecialCharacters(command).toLowerCase());

    if(!current) {
        routerMiddleware.r.push("/404", null, { shallow: true });
        return false;
    }

    const returnToHome = () => routerMiddleware.r.push("/");

    return (
        <LayoutContainer>
            <Head>
                <title>BotDocs — {category}: {command}</title>
            </Head>

            <Categories
                categories={categories}
                commands={commands}
                current={window.location.pathname.split("/category")}
                colors={context.config.categoryColors}
                t={context.func.t}
            />

            <View
                category={category}
                command={current}
                returnToHome={returnToHome}
                Markdown={ReactMarkdown}
                botPrefix={context.config.botPrefix}
                t={context.func.t}
            />
        </LayoutContainer>
    )
}

export default CommandRoute;
