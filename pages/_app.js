import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/globals.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Somnium Space</title>
    </Head>
    <Component {...pageProps} />
  </>
  )
 
}

export default MyApp;
