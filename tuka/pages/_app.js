import "../styles/globals.css";
import Layout from "../components/Layouts/Layout";
import { StyledEngineProvider } from "@mui/material/styles";
// import { store } from "../store";
// import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyledEngineProvider>

    // <Provider store={store}>
    //   <Layout>
    //     <Component {...pageProps} />
    //   </Layout>
    // </Provider>
  );
}

export default MyApp;
