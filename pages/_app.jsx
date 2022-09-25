import 'antd/dist/antd.css'; 
import "../styles/globals.scss";
import { AuthProvider } from "../contexts/Auth";
import Navbar from '../components/Navbar/index';
import Footeer from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Navbar/>
      <Component {...pageProps} />
      <Footeer />
    </AuthProvider>
  );
}

export default MyApp;
