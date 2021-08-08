// necessary stylings
import '../styles/bootstrap-grid.min.css';
import '../styles/bootstrap-reboot.min.css';
import '../styles/main.css';


import { AppProps } from "next/app";

import LayoutComponent from "../layout/Layout";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
};

export default MyApp;
