import { useRouter } from "next/router";
import Index from "../index";

const CategoryRoute = () => {
    const router = useRouter();
    const { name } = router.query;

    return <Index categoryFilter={name} />
}

export default CategoryRoute;
