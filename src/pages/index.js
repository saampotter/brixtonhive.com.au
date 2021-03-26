import Link from 'next/link';
import Image from 'next/image';
import Logo from '../components/Logo';
import TextLogo from '../components/TextLogo';
import Container from '../components/Container';
import WorkStoreDispatch from '../components/WorkStoreDispatch';

export default function Index() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <WhoWeAre />
      <SplitSection />
      <MapSection />
      <WeAreDifferent />
      <WorkStoreDispatch />
      <Enterprise />
      <GetInTouch />
    </div>
  );
}

const Hero = () => (
  <Container className="bg-c-blue-light-500">
    <div className="flex flex-col items-center w-full space-y-8">
      <div className="w-64 max-w-md lg:w-full">
        <Logo />
      </div>

      <div className="w-64 max-w-xl lg:w-full">
        <TextLogo />
      </div>
    </div>
  </Container>
);

const WhoWeAre = () => (
  <Container className="bg-c-blue-500">
    <div className="relative z-10 w-full max-w-2xl mx-auto space-y-12 text-center">
      <p className="text-base font-medium tracking-wide uppercase text-c-blue-300">Who we are</p>

      <h2 className="text-4xl font-medium text-white lg:text-5xl">
        Brixton Hive is a community for work and innovation, storage and creation.
      </h2>

      <h3 className="text-lg text-c-blue-300">
        Home to thriving e-commerce, small businesses and community groups. Brixton Hive takes
        responsibility of services that can be shared and externally managed so you can focus on
        what you do best and enjoy most.
      </h3>

      <Link href="/our-values" passHref>
        <a className="inline-block w-48 p-4 text-lg transition bg-white rounded-full shadow-lg text-c-blue-900 transform-gpu hover:scale-95">
          Our values
        </a>
      </Link>
    </div>

    <svg
      viewBox="0 0 791.94 567.55"
      className="absolute bottom-0 left-0 z-0 transform -translate-x-10 translate-y-10 lg:w-1/2 text-c-blue-600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        strokeWidth="6"
        stroke="currentColor"
        strokeLinecap="round"
        d="M299.27,231.85c0-3.55-2.25-6-5.33-7.78L205.8,173.18a9.94,9.94,0,0,0-10,0L107.7,224.07a10,10,0,0,0-5,8.61V334.46a10,10,0,0,0,5,8.62L195.85,394a9.94,9.94,0,0,0,10,0l88.14-50.89c3.08-1.78,5.12-7.29,5.12-10.84"
      />
      <path
        fill="none"
        strokeWidth="6"
        stroke="currentColor"
        strokeLinecap="round"
        d="M495.66,333.63c0,3.56-2.1,8.1-5.18,9.87l-88.15,50.89a9.94,9.94,0,0,1-9.95,0L304.24,343.5a9.93,9.93,0,0,1-5-8.61V233.1a9.94,9.94,0,0,1,5-8.61l88.14-50.89a9.94,9.94,0,0,1,9.95,0l88.15,50.89c3.08,1.78,5.18,3.81,5.18,7.36"
      />
      <path
        fill="none"
        strokeWidth="6"
        stroke="currentColor"
        strokeLinecap="round"
        d="M495.66,333.63V231.85a10,10,0,0,1,5-8.62l88.15-50.89a10,10,0,0,1,10,0l88.14,50.89a10,10,0,0,1,5,8.62V333.63a10,10,0,0,1-5,8.62l-88.14,50.89a10,10,0,0,1-10,0l-88.15-50.89A9.94,9.94,0,0,1,495.66,333.63Z"
      />
      <path
        fill="none"
        strokeWidth="6"
        stroke="currentColor"
        strokeLinecap="round"
        d="M523.12,317.8V247.68a9.9,9.9,0,0,1,5-8.58l55.74-32.18a19.85,19.85,0,0,1,19.86,0l55.75,32.18a9.91,9.91,0,0,1,5,8.58V317.8a9.91,9.91,0,0,1-5,8.58l-60.72,35.05a9.91,9.91,0,0,1-9.91,0l-60.72-35.05A9.9,9.9,0,0,1,523.12,317.8Z"
      />
      <polyline
        fill="none"
        strokeWidth="6"
        stroke="currentColor"
        strokeLinecap="round"
        points="664.82 242.06 593.75 279.04 522.68 242.06"
      />
      <polyline
        fill="none"
        strokeWidth="6"
        stroke="currentColor"
        strokeLinecap="round"
        points="664.54 283.54 593.75 320.38 522.96 283.54"
      />
      <line
        fill="none"
        strokeWidth="6"
        stroke="currentColor"
        strokeLinecap="round"
        x1="593.75"
        y1="204.27"
        x2="593.75"
        y2="396.01"
      />
      <path
        fill="none"
        strokeWidth="6"
        stroke="currentColor"
        strokeLinecap="round"
        d="M193.18,175c3.08-1.77,6-5.81,6-9.37V63.84a10,10,0,0,0-5-8.62L106.07,4.33a10,10,0,0,0-9.95,0L8,55.22a10,10,0,0,0-5,8.62V165.62a10,10,0,0,0,5,8.62l88.15,50.89c3.08,1.77,8.87.79,11.95-1"
      />
      <path
        fill="none"
        strokeWidth="6"
        stroke="currentColor"
        strokeLinecap="round"
        d="M598.68,393c-3.08,1.77-5.93,5.38-5.93,8.93V503.72a10,10,0,0,0,5,8.61l88.14,50.89a9.94,9.94,0,0,0,10,0L784,512.33a9.94,9.94,0,0,0,5-8.61V401.93a9.93,9.93,0,0,0-5-8.61l-88.15-50.89c-3.08-1.78-7.58-1.14-10.66.64"
      />
    </svg>
  </Container>
);

const SplitSection = () => (
  <div className="lg:flex lg:min-h-screen">
    <Container className="flex-1 lg:px-24 bg-c-purple-500">
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col items-center">
          <div className="flex flex-col space-y-1 lg:items-end">
            <h4 className="text-4xl font-medium text-white uppercase lg:text-5xl">
              Live <span className="text-c-purple-300">local</span>
            </h4>

            <h4 className="text-4xl font-medium text-white uppercase lg:text-5xl">
              work <span className="text-c-purple-300">local</span>
            </h4>

            <p className="pt-12 text-xl lg:text-right text-c-purple-100">
              A place that is home to a community of great humans reflecting a positive, inclusive
              and diverse culture
            </p>
          </div>
        </div>
      </div>
    </Container>

    <Container className="flex-1 lg:px-24 bg-c-purple-400">
      <div className="flex flex-col justify-center h-full space-y-12">
        <p className="text-3xl font-medium lg:text-4xl text-c-purple-200">
          We believe humanity is at its best when we feel{' '}
          <span className="text-white">deeply connected to a community.</span>
        </p>

        <p className="text-3xl font-medium lg:text-4xl text-c-purple-200">
          At Brixton Hive you will certainly benefit from{' '}
          <span className="text-white">our inclusive culture.</span>
        </p>
      </div>
    </Container>
  </div>
);

const MapSection = () => (
  <Container className="bg-c-green-500">
    <div className="relative z-10 w-full max-w-4xl mx-auto space-y-8 lg:space-y-24">
      <p className="text-3xl font-medium text-center text-white lg:text-6xl">
        18 Brixton Rise, Glen Iris.
      </p>

      <div className="flex-grow">
        <div>
          <Image
            src="/images/map.png"
            width="5761"
            height="3449"
            quality="100"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="space-y-8 text-lg text-c-green-800">
        <p>
          Covid-19 has seen many changes in the way we live, not least the explosion in e-commerce
          and the desire to work locally. Most of us at Brixton Hive live within 5 kilometres and we
          all know the value of this.
        </p>
        <p>
          Brixton Hive will provide work, storage and creativity spaces with unparalleled
          accessibility to the local community. We have an abundance of local parking, direct access
          to the train line and bus services, Gardiners Creek Trail on our door step and immediate
          access to the Monash freeway. Currently, it is a 15 minutes drive to the CBD.
        </p>
        <p>
          Working at the Hive allows small and start up businesses to collaborate with a diverse
          range of people while also providing private space for each group to remain focussed on
          innovation and growth.
        </p>
      </div>
    </div>
  </Container>
);

const WeAreDifferent = () => (
  <Container className="bg-c-green-800">
    <svg
      viewBox="0 0 791.94 567.55"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 right-0 z-0 w-1/2 transform transform-x lg:translate-x-10 text-c-green-700"
    >
      <path
        fill="none"
        strokeWidth="6"
        stroke="currentColor"
        strokeLinecap="round"
        d="M299.27,231.85c0-3.55-2.25-6-5.33-7.78L205.8,173.18a9.94,9.94,0,0,0-10,0L107.7,224.07a10,10,0,0,0-5,8.61V334.46a10,10,0,0,0,5,8.62L195.85,394a9.94,9.94,0,0,0,10,0l88.14-50.89c3.08-1.78,5.12-7.29,5.12-10.84"
      />
      <path
        fill="none"
        strokeWidth="6"
        stroke="currentColor"
        strokeLinecap="round"
        d="M495.66,333.63c0,3.56-2.1,8.1-5.18,9.87l-88.15,50.89a9.94,9.94,0,0,1-9.95,0L304.24,343.5a9.93,9.93,0,0,1-5-8.61V233.1a9.94,9.94,0,0,1,5-8.61l88.14-50.89a9.94,9.94,0,0,1,9.95,0l88.15,50.89c3.08,1.78,5.18,3.81,5.18,7.36"
      />
      <path
        fill="none"
        strokeWidth="6"
        stroke="currentColor"
        strokeLinecap="round"
        d="M495.66,333.63V231.85a10,10,0,0,1,5-8.62l88.15-50.89a10,10,0,0,1,10,0l88.14,50.89a10,10,0,0,1,5,8.62V333.63a10,10,0,0,1-5,8.62l-88.14,50.89a10,10,0,0,1-10,0l-88.15-50.89A9.94,9.94,0,0,1,495.66,333.63Z"
      />
      <path
        fill="none"
        strokeWidth="6"
        stroke="currentColor"
        strokeLinecap="round"
        d="M523.12,317.8V247.68a9.9,9.9,0,0,1,5-8.58l55.74-32.18a19.85,19.85,0,0,1,19.86,0l55.75,32.18a9.91,9.91,0,0,1,5,8.58V317.8a9.91,9.91,0,0,1-5,8.58l-60.72,35.05a9.91,9.91,0,0,1-9.91,0l-60.72-35.05A9.9,9.9,0,0,1,523.12,317.8Z"
      />
      <polyline
        fill="none"
        strokeWidth="6"
        stroke="currentColor"
        strokeLinecap="round"
        points="664.82 242.06 593.75 279.04 522.68 242.06"
      />
      <polyline
        fill="none"
        strokeWidth="6"
        stroke="currentColor"
        strokeLinecap="round"
        points="664.54 283.54 593.75 320.38 522.96 283.54"
      />
      <line
        fill="none"
        strokeWidth="6"
        stroke="currentColor"
        strokeLinecap="round"
        x1="593.75"
        y1="204.27"
        x2="593.75"
        y2="396.01"
      />
      <path
        fill="none"
        strokeWidth="6"
        stroke="currentColor"
        strokeLinecap="round"
        d="M193.18,175c3.08-1.77,6-5.81,6-9.37V63.84a10,10,0,0,0-5-8.62L106.07,4.33a10,10,0,0,0-9.95,0L8,55.22a10,10,0,0,0-5,8.62V165.62a10,10,0,0,0,5,8.62l88.15,50.89c3.08,1.77,8.87.79,11.95-1"
      />
      <path
        fill="none"
        strokeWidth="6"
        stroke="currentColor"
        strokeLinecap="round"
        d="M598.68,393c-3.08,1.77-5.93,5.38-5.93,8.93V503.72a10,10,0,0,0,5,8.61l88.14,50.89a9.94,9.94,0,0,0,10,0L784,512.33a9.94,9.94,0,0,0,5-8.61V401.93a9.93,9.93,0,0,0-5-8.61l-88.15-50.89c-3.08-1.78-7.58-1.14-10.66.64"
      />
    </svg>

    <div className="relative z-10 max-w-4xl mx-auto space-y-8 lg:space-y-24">
      <p className="text-3xl font-medium text-center text-white lg:text-5xl">
        We are different to any other co-work or storage space... on purpose.
      </p>

      <div className="space-y-24 lg:flex lg:space-x-16 lg:space-y-0">
        <div className="flex flex-col flex-1 space-y-8">
          <div className="space-y-8 text-lg text-c-green-300">
            <p>
              Brixton Hive is divided into four functional zones that each include different
              benefits. Every tenant has unique needs, and we pride ourselves on being able to
              customise each package to best suit the community member.
            </p>
            <p>
              A community manager is onsite 9-5 weekdays to ensure the smooth running of this
              workplace so you can be focussed on your work. We provide secure a monitored dispatch
              space so you can leave your orders to be courier collected without needing to stay on
              site.
            </p>
            <p>
              We have all the equipment on site that you will need to receive your deliveries, be
              that receiving parcels or boxes to unloading pallets from a truck or containers.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

const Enterprise = () => {
  const options = [
    'Fabulous tree-top views and some city views',
    'Exclusive secure 24/7 access',
    'Private faculties can be inclusive of your new workplace',
    'Reserved parking spaces available',
  ];

  return (
    <Container className="bg-white">
      <div className="w-full max-w-4xl mx-auto space-y-16">
        <p className="text-4xl font-bold text-center text-gray-900 lg:text-5xl">Enterprise</p>

        <div className="space-y-16 lg:flex lg:items-center lg:space-x-16 lg:space-y-0">
          <div className="w-full space-y-8">
            <p className="text-3xl font-medium text-gray-900">
              Your clean slate, ready to be tailored to your enterprise business needs
            </p>

            <div className="space-y-8 text-lg text-gray-700">
              <p>
                Most of our larger long term members have worked with us to customise their perfect
                environment, Blakes Feast, Thrust Maritime and Glen Iris School of Dance are just
                three examples of this.
              </p>

              <p>
                Each of these thriving businesses has experienced the benefit of the availability of
                expansion of space as their business has evolved.
              </p>

              <p>
                If your company needs space for more than six members, please{' '}
                <a href="#get-in-touch">get in touch with us</a> to create the perfect space for
                you.
              </p>
            </div>
          </div>

          <div className="flex-grow max-w-md space-y-8">
            <div>
              <Image
                width="6000"
                height="4000"
                quality="100"
                src="/images/nTO9T_VQ.jpeg"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Image
                width="6000"
                height="4000"
                quality="100"
                src="/images/img_2313.jpeg"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap space-y-2 lg:space-y-0 lg:space-x-4 lg:flex-nowrap">
          {options.map(option => (
            <div className="px-4 py-2 text-gray-900 bg-gray-100 rounded-md">{option}</div>
          ))}
        </div>
      </div>
    </Container>
  );
};

const GetInTouch = () => (
  <Container id="get-in-touch">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 892.04 906.92"
      className="absolute z-0 lg:w-1/2 right-28 text-c-brown-600"
    >
      <path
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        stroke="currentColor"
        d="M297.46,402.18c0-3.56-2.25-6-5.33-7.79L204,343.5a10,10,0,0,0-10,0l-88.15,50.89a10,10,0,0,0-5,8.62V504.79a10,10,0,0,0,5,8.62L194,564.3a9.94,9.94,0,0,0,10,0l88.14-50.89c3.08-1.78,5.12-7.29,5.12-10.84"
      />
      <path
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        stroke="currentColor"
        d="M593.75,673c0,3.55-2.1,8.09-5.18,9.87l-88.14,50.89a9.94,9.94,0,0,1-9.95,0l-88.15-50.89a10,10,0,0,1-5-8.62V572.47a10,10,0,0,1,5-8.61L490.48,513a9.94,9.94,0,0,1,9.95,0l88.14,50.89c3.08,1.77,5.18,3.8,5.18,7.36"
      />
      <path
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        stroke="currentColor"
        d="M593.75,673V571.22a10,10,0,0,1,5-8.62l88.14-50.89a9.94,9.94,0,0,1,10,0L785,562.6a10,10,0,0,1,5,8.62V673a10,10,0,0,1-5,8.62l-88.15,50.89a10,10,0,0,1-10,0l-88.14-50.89A10,10,0,0,1,593.75,673Z"
      />
      <path
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        stroke="currentColor"
        d="M488.06,514.36c3.07-1.78,6-5.82,6-9.37V403.21a9.94,9.94,0,0,0-5-8.62L400.94,343.7a9.92,9.92,0,0,0-9.94,0l-88.15,50.89a9.94,9.94,0,0,0-5,8.62V505a10,10,0,0,0,5,8.62L391,564.5c3.07,1.77,8.87.79,11.94-1"
      />
      <path
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        stroke="currentColor"
        d="M696.77,732.37c-3.08,1.77-5.92,5.38-5.92,8.93V843.08a9.94,9.94,0,0,0,5,8.62L784,902.59a9.94,9.94,0,0,0,9.95,0l88.14-50.89a10,10,0,0,0,5-8.62V741.3a9.94,9.94,0,0,0-5-8.61L793.92,681.8c-3.08-1.78-7.59-1.14-10.67.64"
      />
      <path
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        stroke="currentColor"
        d="M193.18,344.06c3.08-1.78,6-5.82,6-9.38V232.9a9.94,9.94,0,0,0-5-8.61L106.07,173.4a9.94,9.94,0,0,0-9.95,0L8,224.29a10,10,0,0,0-5,8.61V334.68a10,10,0,0,0,5,8.62l88.15,50.89c3.08,1.78,8.87.79,11.95-1"
      />
      <path
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        stroke="currentColor"
        d="M785.22,562.76c3.08,1.78,7.62,2.44,10.7.66l88.14-50.89a9.94,9.94,0,0,0,5-8.61V402.14a10,10,0,0,0-5-8.62l-88.14-50.89a9.94,9.94,0,0,0-9.95,0l-88.15,50.89a10,10,0,0,0-5,8.62V503.92c0,3.55,2.81,7.14,5.89,8.91"
      />
      <path
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        stroke="currentColor"
        d="M487.83,393.47c3.08,1.78,7.62,2.44,10.7.67l88.15-50.9a10,10,0,0,0,5-8.61V232.85a10,10,0,0,0-5-8.62l-88.15-50.89a9.94,9.94,0,0,0-9.95,0l-88.14,50.89a10,10,0,0,0-5,8.62V334.63c0,3.55,2.81,7.14,5.89,8.91"
      />
      <path
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        stroke="currentColor"
        d="M193.46,224.47c3.08,1.77,7.62,2.43,10.7.66l88.15-50.89a9.94,9.94,0,0,0,5-8.62V63.84a10,10,0,0,0-5-8.62L204.16,4.33a10,10,0,0,0-9.95,0L106.07,55.22a10,10,0,0,0-5,8.62V165.62c0,3.56,2.81,7.14,5.89,8.92"
      />
    </svg>

    <div className="relative z-10 w-full max-w-4xl space-y-24">
      <div className="space-y-8 text-3xl font-medium text-center text-white lg:text-5xl">
        <p>
          Get in touch
          <br />
          Together, we will create the space you love.
        </p>
      </div>

      <div className="flex-shrink-0 p-8 space-y-4 rounded-lg shadow-lg lg:space-y-0 lg:space-x-8 lg:flex lg:items-center lg:justify-between bg-c-brown-200">
        <div className="flex-1">
          <p className="text-lg text-gray-500">Email us at</p>
          <a href="mailto:hello@brixtonhive.com.au" className="text-2xl font-medium">
            hello@brixtonhive.com.au
          </a>
        </div>
        <div className="flex-1">
          <p className="text-lg text-gray-500">Or give us a call on</p>
          <a href="tel:0420545024" className="text-2xl font-medium">
            0420 545 024
          </a>
        </div>
      </div>
    </div>
  </Container>
);
