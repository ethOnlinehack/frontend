import 'antd/dist/antd.css'; 
import "../styles/globals.scss";
import { AuthProvider } from "../contexts/Auth";
import Navbar from '../components/Navbar/index';


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Navbar/>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
