import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from '../store/store'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
        <Toaster />
      </Provider>
    </>
  );
}

export default MyApp;
