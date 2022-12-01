import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/globals.scss";
import Head from "next/head";
import Base from "../Components/Layouts/Base";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Somnium Space</title>
    </Head>
    <Base>
    <Component {...pageProps} />
    </Base>
  </>
  )
 
}

export default MyApp;
