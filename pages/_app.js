import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/globals.scss";
import { useEffect } from "react";
import Head from "next/head";
import Base from "../Components/Layouts/Base";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);
  // useEffect(() => {
  //   require("bootstrap/dist/js/bootstrap.bundle.min.js");
  // }, []);
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
