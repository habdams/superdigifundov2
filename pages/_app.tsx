import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../app/store";
import { setAuthToken } from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logOutUser } from "../features/authReducer";
import { useDispatch } from "react-redux";

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);

    if (typeof window !== "undefined") {
        if (localStorage.jwtToken) {
            setAuthToken(localStorage.jwtToken);
            const decodedToken = jwt_decode(localStorage.jwtToken);
            store.dispatch(setCurrentUser(decodedToken));
            const currentTime = Date.now() / 1000;
            if (decodedToken["exp"] < currentTime) {
                // log out user
                store.dispatch(logOutUser());
                // Redirect to login
                window.alert("Session expired, please login again.");
                window.location.href = "/";
            }
        }
    }

    return getLayout(
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
