import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
// import SiteLayout from 'hoc/Layout/SiteLayout';
import dynamic from 'next/dynamic';
import createEmotionCache from '../config/createEmotionCache';
import theme from '../config/theme';

const ViewportProvider = dynamic(() => import('../context/viewPortContext'), {
  ssr: false,
});
const CartProvider = dynamic(() => import('../context/cartContext'), {
  ssr: false,
});

// swiper styles
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//toastify style
import 'react-toastify/dist/ReactToastify.css';

import '../styles/app.scss';

import SiteLayout from '../hoc/Layout/SiteLayout';
import { ToastContainer } from 'react-toastify';
import UserProvider from '../context/userContext';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props: {
  Component: any;
  emotionCache?: EmotionCache | undefined;
  pageProps: any;
}) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <ViewportProvider>
      <UserProvider>
        <CartProvider>
          <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <SiteLayout>
                <CssBaseline />
                <Component {...pageProps} />
                <ToastContainer />
              </SiteLayout>
            </ThemeProvider>
          </CacheProvider>
        </CartProvider>
      </UserProvider>
    </ViewportProvider>
  );
}

export default MyApp;
