import "../styles/globals.css";
import type { AppProps } from "next/app";
import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:3001/api";
Axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
