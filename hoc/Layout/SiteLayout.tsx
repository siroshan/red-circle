import React, { ReactNode } from 'react';
import Head from 'next/head';
import { useViewport } from '../../config/viewPortContext';
import NavBar from '../../components/NavBar/NavBar';
import MobNavBar from '../../components/NavBar/MobNavBar';

const SiteLayout = ({ children }: {children: ReactNode}) => {
  const { width } = useViewport();

  return (
    <div>
      <Head>
        {/* <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' /> */}
        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='theme-color' content='#FFFFFF' />
        {/* <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#FF582A' /> */}

        {/* SEO */}
        <meta
          name='description'
          content="Sri Lanka's largest high quality fitness equipment provider. · Treadmills · Cross Trainers · Exercise Bikes · Benches · Home Gym · Ab Products."
        />
        <meta property='og:title' content={'Fitness Zone'} />
        <meta
          property='og:description'
          content={
            "Sri Lanka's largest high quality fitness equipment provider. · Treadmills · Cross Trainers · Exercise Bikes · Benches · Home Gym · Ab Products."
          }
        />
        <meta name='og:type' content={'website'} />
        <meta
          property='og:url'
          content={typeof window != 'undefined' ? window.location.href : ''}
        />
        <meta property='og:image' content={'/logo.jepg'} />
        <meta property='og:image:alt' content={'Kanz Art'} />
        <meta property='og:image:secure_url' content={'/logo.jpeg'} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:description'
          content={
            " Sri Lanka's largest high quality fitness equipment provider. · Treadmills · Cross Trainers · Exercise Bikes · Benches · Home Gym · Ab Products."
          }
        />
        <meta name='twitter:title' content={'add content here'} />
        <meta name='twitter:image' content={'/logo.jpeg'} />
      </Head>

      {width > 600 ? <NavBar /> : <MobNavBar />}

      <main className='main'>{children}</main>
    </div>
  );
};

export default SiteLayout;
