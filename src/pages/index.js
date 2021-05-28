import Head from "next/head";
import LayoutContainer from "../components/layout/Container";
import Categories from "../components/categories/List";
import Commands from "../components/commands/List";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useAppContextProvider } from "../contexts/AppContext";
import { useCommandContextProvider } from "../contexts/CommandContext";

export default function Index({ categoryFilter = null }) {
    const context = useAppContextProvider();

    const { categories, commands } = useCommandContextProvider();

    const router = useRouter();

    const [filtered, setFiltered] = useState(commands);

    const onSearch = (query) => {
        if(query.length < 2) {
            if(categoryFilter) {
                return setFiltered(commands.filter(cmd => cmd.category.toLowerCase() === categoryFilter.toLowerCase()));
            }

            return setFiltered(commands);
        }

        return setFiltered(filtered.filter(cmd => {
            return (categoryFilter ? (
                cmd.category.toLowerCase() === categoryFilter.toLowerCase()
            ) : true) && (cmd.name.toLowerCase().includes(query.toLowerCase()) || cmd.description.toLowerCase().includes(query.toLowerCase()))
        }));
    };

    useEffect(() => {
        if(!categoryFilter) return;

        setFiltered(commands.filter(cmd => cmd.category.toLowerCase() === categoryFilter.toLowerCase()))
    }, [categoryFilter]);

    return (
        <LayoutContainer>
            <Head>
                <title>BotDocs — The only bot documentation software you need.</title>
            </Head>

            <Categories
                categories={categories}
                commands={commands}
                current={router.asPath.split("/category")}
                colors={context.config.categoryColors}
                t={context.func.t}
            />

            <Commands
                commands={filtered}
                mode={context.config.listMode}
                colors={context.config.categoryColors}
                isCategoryActive={typeof router.asPath.split("/category")[1] !== "undefined"}
                onSearch={onSearch}
                t={context.func.t}
            />
        </LayoutContainer>
    );
}
