import "styles/globals.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Header from '../components/Header'
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <Component {...pageProps} /> 
    </>
  ) 
}
export default App
