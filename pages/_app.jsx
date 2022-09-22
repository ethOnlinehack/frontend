import 'antd/dist/antd.css'; 
import "../styles/globals.scss";
import { AuthProvider } from "../contexts/Auth";


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
