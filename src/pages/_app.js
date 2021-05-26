import { AppContextProvider } from "../contexts/AppContext";
import "../styles/app.sass";

export default function App({ Component, pageProps }) {
    return (
        <AppContextProvider>
            <Component {...pageProps} />
        </AppContextProvider>
    );
};
