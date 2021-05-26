import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function useCommands() {
    const { data, error } = useSWR("/api/commands", fetcher);

    return {
        commands: data,
        error: error
    };
}
