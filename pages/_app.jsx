import 'antd/dist/antd.css'; 
import '@ant-design/pro-components/dist/components.css';
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
