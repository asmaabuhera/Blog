import  "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/navBar";
import ReduxProvider from "../redux/provider";

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <ReduxProvider>
    <NavBar />
    <Component {...pageProps} />
    </ReduxProvider>
  </>
}
