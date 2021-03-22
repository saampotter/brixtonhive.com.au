import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import 'tailwindcss/tailwind.css';
import seoConfig from '../../seo.config';
import Nav from '../components/Nav';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <DefaultSeo {...seoConfig} />
    <Nav />
    <Component {...pageProps} />
  </>
);

export default App;
