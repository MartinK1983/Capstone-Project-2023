import "../shared/styles/globals.css";
import Layout from "@components/Layout";

function FreeDogGo({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default FreeDogGo;
