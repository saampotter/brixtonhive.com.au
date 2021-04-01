import Head from 'next/head';
import { DefaultSeo, LocalBusinessJsonLd, LogoJsonLd } from 'next-seo';

import '../tailwind.css';
import Nav from '../components/Nav';

const url = 'https://brixtonhive.com.au';
const title = 'Brixton Hive | Glen Iris';
const description =
  'Brand-new first class self storage. Container storage excellent access to freeway. Flexible terms varying sizes available shared office and co-working space. Warehousing for trades and e-commerce.';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <DefaultSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        url,
        title,
        description,
        images: [
          {
            url: `${url}/images/brixton-hive.jpg`,
            width: 800,
            height: 600,
            alt: 'Brixton Hive Logo',
          },
        ],
      }}
    />
    <LogoJsonLd url={url} logo={`${url}/images/logo.png`} />
    <LocalBusinessJsonLd
      id={url}
      type="LocalBusiness"
      name="Brixton Hive"
      description={description}
      url={url}
      telephone="+61420545024"
      address={{
        postalCode: '3146',
        addressCountry: 'AU',
        addressRegion: 'Victoria',
        addressLocality: 'Melbourne',
        streetAddress: '18 Brixton Rise',
      }}
      geo={{
        latitude: '-37.8591346',
        longitude: '145.0602338',
      }}
      images={[`${url}/images/footpath.jpeg`]}
      openingHours={[
        {
          opens: '08:00',
          closes: '17:00',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        },
      ]}
      sameAs={[`http://www.glenirisselfstorage.com.au/`]}
    />
    <Nav />
    <Component {...pageProps} />
  </>
);

export default App;
