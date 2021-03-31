import clsx from 'clsx';
import Image from 'next/image';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { LightBulbOutline, UserGroupOutline, UserOutline } from 'heroicons-react';

import Logo from '../components/Logo';
import Button from '../components/Button';
import TextLogo from '../components/TextLogo';
import Container from '../components/Container';
import ContentContainer from '../components/ContentContainer';

export default function Index() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <SplitSection />
      <MapSection />
      <Work />
      <Store />
      <Warehouse />
      <Enterprise />
      <GetInTouch />
    </div>
  );
}

const Hero = () => {
  const inputs = [0.04, 0.06];
  const { scrollYProgress } = useViewportScroll();
  const svgColor = useTransform(scrollYProgress, inputs, ['#80BEC2', '#243C4E']);
  const backgroundColor = useTransform(scrollYProgress, inputs, ['#8ED3D7', '#284357']);
  const textColor = useTransform(scrollYProgress, inputs, ['#466769', '#a9b4bc']);

  return (
    <motion.div style={{ backgroundColor }}>
      <Container>
        <div className="pb-48 space-y-64">
          <div className="flex flex-col items-center w-full space-y-8">
            <div className="w-64 max-w-md lg:w-full">
              <Logo />
            </div>

            <div className="w-64 max-w-xl lg:w-full">
              <TextLogo />
            </div>

            <h2 className="max-w-2xl text-2xl font-medium text-center text-white lg:text-4xl">
              A community for work and innovation, storage and creation.
            </h2>

            <svg
              fill="none"
              viewBox="0 20 16 48"
              className="w-4 text-white animate-bounce"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M6.55759 1.43986V43.0793L2.46852 39.0045C1.90501 38.443 0.991112 38.443 0.423989 39.0045C-0.143134 39.566 -0.139522 40.4804 0.423989 41.0419L6.98022 47.5752C7.04885 47.6436 7.1211 47.7012 7.20057 47.7552C7.23308 47.7768 7.2692 47.7912 7.30171 47.8092C7.34867 47.8344 7.39924 47.8668 7.44981 47.8884C7.49316 47.9064 7.5365 47.9136 7.57985 47.928C7.62681 47.9424 7.67377 47.9604 7.72073 47.9712C7.79297 47.9856 7.86883 47.9892 7.94469 47.9928C7.96636 47.9928 7.98442 48 8.00248 48C8.02416 48 8.04583 47.9928 8.0675 47.9928C8.13975 47.9892 8.21199 47.9856 8.28424 47.9712C8.33481 47.9604 8.38538 47.9424 8.43234 47.928C8.47208 47.9136 8.51542 47.9064 8.55155 47.892C8.60573 47.8704 8.65991 47.838 8.71048 47.8092C8.73938 47.7912 8.77189 47.7804 8.80079 47.7624C8.88026 47.7084 8.95612 47.6472 9.02475 47.5788L15.5774 41.0491C15.8591 40.7683 16 40.3976 16 40.0304C16 39.6632 15.8591 39.2925 15.5774 39.0117C15.0139 38.4502 14.0963 38.4502 13.5328 39.0117L9.44738 43.0793V1.43986C9.44738 0.644335 8.80079 0 8.00248 0C7.20418 0 6.55759 0.644335 6.55759 1.43986Z"
              />
            </svg>
          </div>
          <div className="relative z-10 w-full max-w-2xl mx-auto space-y-12 text-center">
            <motion.p
              style={{ color: textColor }}
              className="text-base font-medium tracking-wide uppercase"
            >
              Who are we ?
            </motion.p>

            <motion.h3 style={{ color: textColor }} className="text-2xl">
              Home to thriving e-commerce, small businesses and community groups. Brixton Hive takes
              responsibility of services that can be shared and externally managed so you can focus
              on what you do best and enjoy most.
            </motion.h3>
          </div>

          <motion.svg
            style={{ color: svgColor }}
            viewBox="0 0 791.94 567.55"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0 z-0 transform -translate-x-10 lg:w-1/2"
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
          </motion.svg>
        </div>
      </Container>
    </motion.div>
  );
};

const SplitSection = () => {
  const inputs = [0.11, 0.15];
  const { scrollYProgress } = useViewportScroll();
  const left = useTransform(scrollYProgress, inputs, ['-100%', '0%']);
  const right = useTransform(scrollYProgress, inputs, ['100%', '0%']);
  const borderRadius = useTransform(scrollYProgress, inputs, ['16px', '0%']);
  const scale = useTransform(scrollYProgress, [inputs[1], inputs[1] + 0.3], [1, 0.8]);

  return (
    <Container className="pointer-events-none bg-c-blue-500">
      <div className="fixed top-0 left-0 z-20 flex flex-col min-h-screen lg:flex-row">
        <motion.div
          style={{ x: left, borderRadius }}
          className="flex items-center justify-center flex-1 p-4 pointer-events-auto lg:min-h-screen lg:px-24 bg-c-purple-500"
        >
          <motion.div style={{ scale }} className="space-y-1 lg:text-right">
            <h4 className="text-4xl font-medium text-white uppercase lg:text-5xl">
              Live <span className="text-c-purple-300">local</span>
            </h4>

            <h4 className="text-4xl font-medium text-white uppercase lg:text-5xl">
              work <span className="text-c-purple-300">local</span>
            </h4>

            <p className="pt-12 text-xl lg:text-right text-c-purple-100">
              A place that is home to a community of great humans reflecting a positive, inclusive
              and diverse culture. We believe humanity is at its best when we feel deeply connected
              to a community.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ x: right, borderRadius }}
          className="flex items-center justify-center flex-1 px-6 pointer-events-auto lg:min-h-screen lg:px-24 bg-c-purple-400"
        >
          <motion.div
            style={{ scale }}
            className="space-y-6 text-2xl font-medium text-white lg:text-4xl"
          >
            <p>
              Image a place of business accompanied by state-of-the-art storage facilities with a
              deepy rooted social and environmental conscience.
            </p>

            <Button href="/our-values">Some things we value</Button>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

const MapSection = () => {
  const inputs = [3300, 3500];
  const { scrollY } = useViewportScroll();
  const color = useTransform(scrollY, inputs, ['#62685c', '#daded6']);
  const backgroundColor = useTransform(scrollY, inputs, ['#A3AD99', '#62685c']);

  return (
    <motion.div style={{ backgroundColor }} className="relative">
      <Container>
        <div className="relative z-10 w-full max-w-4xl mx-auto space-y-8 lg:space-y-24">
          <p className="text-3xl font-medium text-center text-white lg:text-6xl">
            18 Brixton Rise, Glen Iris.
          </p>

          <div className="flex-grow">
            <div>
              <Image
                width="5761"
                height="3449"
                quality="100"
                src="/images/map.png"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <motion.div style={{ color }} className="space-y-8 text-lg">
            <p>
              Covid-19 has seen many changes in the way we live, with an explosion in e-commerce and
              the desire to work locally. Most of us at Brixton Hive live within 5 kilometres and we
              all know the value of this.
            </p>
            <p>
              Brixton Hive will provide work, storage and creativity spaces with unparalleled
              accessibility to the local community. We have an abundance of local parking, direct
              access to the train line and bus services, Gardiners Creek Trail on our door step and
              immediate access to the Monash freeway. Currently, it is a 15 minutes drive to the
              CBD.
            </p>
            <p>
              Working at the Hive allows small and start up businesses to collaborate with a diverse
              range of people while also providing private space for each group to remain focussed
              on innovation and growth.
            </p>
          </motion.div>
        </div>
      </Container>
      <Container>
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
                  A place curator is onsite 9-5 weekdays to ensure the smooth running of this
                  workplace so you can be focussed on your work. We provide secure a monitored
                  dispatch space so you can leave your orders to be courier collected without
                  needing to stay on site.
                </p>
                <p>
                  We have all the equipment on site that you will need to receive your deliveries,
                  be that receiving parcels or boxes to unloading pallets from a truck or
                  containers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

const Work = () => {
  const spaceOptions = [
    { text: 'Private office', Icon: UserOutline },
    { text: 'Creative studio', Icon: LightBulbOutline },
    { text: 'Dedicated and open desks', Icon: UserGroupOutline },
  ];

  const communualFacilities = [
    'Breakout spaces',
    'Meeting rooms',
    'Kitchen',
    'Function spaces',
    'Events',
    'Outdoor terrace with BBQ and bar',
    'Dedicated podcast room',
    'Flexible photography studio',
    'Convenient parking',
    'End of trip facilities',
  ];

  return (
    <Container id="work" className="bg-c-green-500">
      <div className="space-y-16">
        <p className="text-4xl font-bold text-center text-white lg:text-5xl">Work</p>

        <ContentContainer>
          <div className="space-y-8">
            <p className="text-3xl font-medium text-white">
              Communal, private, or creative work spaces for everyone
            </p>
            <p className="text-lg text-c-green-800">
              It’s all the rage: office and desk space with communal facilities. The hive is more
              than a cluster of secure spaces, we're a place of mixed use, great diversity, and
              connectivity. We even allow visitation of pets with approval from the place curator.
            </p>
            <div className="flex space-x-2">
              {spaceOptions.map(({ text, Icon }) => (
                <div className="flex flex-col justify-between flex-1 px-4 py-4 space-y-2 rounded-lg bg-c-green-200">
                  <Icon className="text-c-green-500" />
                  <p className="text-lg text-c-green-900">{text}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-c-green-800">
              There are a variety of facilities and events to promote a vibrant atmosphere
              including:
            </p>
            <Options options={communualFacilities} className="text-c-green-100 bg-c-green-700" />
          </div>
          <div className="flex-grow max-w-sm">
            <Image
              width="3334"
              quality="100"
              height="3989"
              src="/images/IMG_9424.png"
              className="rounded-lg shadow-lg"
            />
          </div>
        </ContentContainer>
      </div>
    </Container>
  );
};

const Store = () => {
  const options = [
    'Fire rated',
    'Monitored secure storage',
    'Exclusive 7-day access',
    'Short, medium, and long-term flexible spaces',
    'Keyless entry',
    'End of trip facilities',
  ];

  return (
    <Container id="store" className="bg-c-blue-light-500">
      <div className="flex flex-col items-center space-y-16">
        <p className="text-4xl font-bold text-white lg:text-5xl">Store</p>

        <ContentContainer>
          <div className="space-y-8">
            <p className="text-3xl font-medium text-white">First class self storage</p>

            <p className="text-lg text-c-blue-light-900">
              Premium prices for land in Melbourne have many people opting for off-site storage.{' '}
              <b>Our rates are highly competitive.</b> Managed by friendly and engaging staff,
              supported by state of the art storage software. 1000m2 dedicated to individual storage
              units. Various sizes available, starting at 2.25m2.
            </p>

            <Options options={options} className="text-white bg-c-blue-light-600" />
          </div>
          <div className="flex-shrink-0 w-full max-w-sm">
            <div>
              <Image
                width="646"
                height="800"
                quality="100"
                src="/images/StorageRoom.png"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </ContentContainer>

        <Button href="/get-a-quote">Get a quote</Button>
      </div>
    </Container>
  );
};

const Warehouse = () => {
  const options = [
    'Fire rated',
    '7 day access',
    'Sizes starting from 10m2',
    'Ground level vehicle access',
    'Monitored security',
    'Secure, monitored delivery and dispatch',
    'Printing and packaging stations',
    'End of trip facilities',
    'Competitive rates',
    'Collaborative culture',
  ];

  return (
    <Container id="warehouse" className="bg-c-blue-500">
      <div className="flex flex-col items-center space-y-16">
        <p className="text-4xl font-bold text-white lg:text-5xl">Warehouse</p>

        <ContentContainer>
          <div className="space-y-8">
            <p className="text-lg text-c-blue-200">
              We have long had a growing community of trades people who we greatly value and wish to
              dedicate awesome facilities that will help them run their ships like clockwork. Many
              of these trades use the warehousing in the early hours of the day, gather the tools
              they need for the day’s productivity, and return at the end of the day to secure their
              valuables.
            </p>
            <Options options={options} className="text-white bg-c-blue-700" />
            <div className="p-6 space-y-2 rounded-lg shadow-lg bg-c-blue-200">
              <p className="text-2xl font-medium text-c-blue-900">E-commerce capabilities</p>
              <p className="text-c-blue-700">
                We make dispatching orders a breeze with all the equipment on site that you will
                need to receive your deliveries, be that receiving parcels or boxes to unloading
                pallets from a truck or containers.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm">
            <Image
              src="/images/IMG_9452.png"
              width="2467"
              height="3918"
              quality="100"
              className="rounded-lg shadow-lg"
            />
          </div>
        </ContentContainer>

        <Button href="/get-a-quote">Get a quote</Button>
      </div>
    </Container>
  );
};

const Enterprise = () => {
  const options = [
    'Fabulous tree-top views and some city views',
    'Exclusive secure 24/7 access',
    'Private faculties can be inclusive of your new workplace',
    'Reserved parking spaces available',
  ];

  return (
    <Container className="bg-c-gray-500">
      <div className="w-full max-w-4xl mx-auto space-y-16">
        <p className="text-4xl font-bold text-center text-c-gray-900 lg:text-5xl">Enterprise</p>

        <div className="space-y-16 lg:flex lg:items-center lg:space-x-16 lg:space-y-0">
          <div className="w-full space-y-8">
            <p className="text-3xl font-medium text-c-gray-900">
              Your clean slate, ready to be tailored to your enterprise business needs
            </p>

            <div className="space-y-8 text-lg text-c-gray-800">
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
                If your company needs space for more than six members, please get in touch with us
                to create the perfect space for you.
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
            <div className="px-4 py-2 bg-gray-100 rounded-md text-c-gray-900">{option}</div>
          ))}
        </div>
      </div>
    </Container>
  );
};

const GetInTouch = () => (
  <Container className="bg-c-brown-500" id="get-in-touch">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 892.04 906.92"
      className="absolute z-0 lg:w-3/4 right-28 text-c-brown-600"
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

const Options = ({ options = [], className }) => (
  <div className="flex flex-wrap items-start">
    {options.map(option => (
      <p className={clsx('px-3 my-1 mr-2 py-1 rounded-md', className)}>{option}</p>
    ))}
  </div>
);
