import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
// import SiteLayout from 'hoc/Layout/SiteLayout';
import { SessionProvider, useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import createEmotionCache from '../config/createEmotionCache';
import theme from '../config/theme';

import '../styles/globals.scss';
import '../styles/app.scss';

// const ViewportProvider = dynamic(() => import('../config/viewPortContext'), {
//   ssr: false,
// });

// swiper styles
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props: { Component: any; emotionCache?: EmotionCache | undefined; pageProps: any; }) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <SessionProvider session={pageProps.session}>
              <CssBaseline />
              <Component {...pageProps} />
          </SessionProvider>
        </ThemeProvider>
      </CacheProvider>
  );
}

export default MyApp;
