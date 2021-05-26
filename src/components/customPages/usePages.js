import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function usePages() {
    const { data, error } = useSWR("/api/customPages", fetcher);

    return {
        pages: data,
        error: error
    };
}
