import 'antd/dist/antd.css'; 
import "../styles/globals.css";

import { AuthProvider, useAuth } from "../contexts/Auth";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
