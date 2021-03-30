import Image from 'next/image';
import Container from '../components/Container';
import ContentContainer from '../components/ContentContainer';

export default function OurValues() {
  return (
    <>
      <div className="relative">
        <Svg />

        <Container className="bg-c-brown-500">
          <ContentContainer>
            <div className="space-y-8 lg:space-y-0 lg:space-x-4 lg:flex">
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-white lg:text-6xl">Our Values</h1>
              </div>

              <div className="flex-1">
                <div className="space-y-8 text-xl font-medium lg:space-y-16 text-c-brown-800">
                  <p className="text-2xl text-c-brown-200">
                    We endeavour to be a place that is home to a community of great humans
                    reflecting a positive, inclusive and diverse culture.
                  </p>

                  <p>
                    The Brixton Hive family strives to empower others, simplify the complexities of
                    running businesses and life and live harmoniously in the environment we are
                    current custodians of.
                  </p>
                  <p>
                    We acknowledge the original custodians of this land, the Wurundjeri people who
                    nurtured the Kooyongcoot Creek, who used it as a source of vegetation, food,
                    tools and medicine, sustaining it for thousands of years with minimal impact on
                    the environment. We delight in the opportunity to connect to the land daily and
                    that its restoration to native vegetation is well under way. It’s a step out the
                    door and we are immersed in this regenerating forest, we are grateful.
                  </p>
                </div>
              </div>
            </div>
          </ContentContainer>
        </Container>
      </div>

      <Container className="bg-c-green-500">
        <ContentContainer>
          <div className="space-y-8">
            <h2 className="text-3xl font-medium text-white">Caring for our environment</h2>

            <div className="space-y-8 text-lg text-c-green-800">
              <p>
                Our Environment is of paramount importance to us and high on our values list. We
                have worked towards and will continue to strive to make our environment as
                sustainable as possible and do all we can to minimise our footprint. Brixton Hive is
                heading towards 90% renewable energy in investing its rooftop space to housing our
                very own solar energy farm.
              </p>
              <p>
                We are passionate about the importance of the contribution of bees to our life on
                this planet and not only pay homage to this species in our branding, but you will
                also find hives dotted carefully around the property. These Hive are placed as such
                that they will provide no disruption or danger to our community members but only
                enhance our local flora and fauna. From time to time, you will be lucky enough to
                dip into a jar of produce from our tiniest tenants.
              </p>
              <p>
                Communal printing options considerably reduce our carbon emissions and Brixton Hive
                will be carefully managing waste. Recycling bins are available and managed
                throughout the property. We are thrilled with installation of worm farms to
                responsibly compost food and green wastes (making substantial contributions to
                reducing CH4 - Methane) into fertilisers to enhance the health of in-house plants to
                absorb more Co2. This is a program we are actively working on growing with
                Stonnington council to absorb all compostable food waste at Brixton Hive.
              </p>
              <p>
                We encourage the wonderful opportunity to combine your journey to the workplace with
                riding, jogging or walking part or the full journey to work. You’ll reap the
                benefits of the urban Forrest on our doorstep and your body and mind will thank you
                for it.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 w-full max-w-sm space-y-8">
            <div>
              <Image
                width="776"
                height="1001"
                quality="100"
                src="/images/solar.png"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div>
              <Image
                width="2048"
                quality="100"
                height="1536"
                src="/images/footpath.jpeg"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </ContentContainer>
      </Container>

      <Container>
        <div className="space-y-24">
          <ContentContainer>
            <div className="flex-shrink-0 w-full max-w-sm">
              <Image
                width="480"
                quality="100"
                height="640"
                src="/images/giving-back.JPG"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-medium text-white">Giving Back</h2>

              <p className="text-lg text-c-brown-800">
                We appreciate it is difficult to get started in new business. We consider short term
                scholarships to help start-ups get underway. We also value the in-put to humanity
                that non-for-profits provide and partner with several organisations. Please talk to
                us if you feel we could help you get started.
              </p>
            </div>
          </ContentContainer>

          <ContentContainer>
            <div className="space-y-8">
              <h2 className="text-2xl font-medium text-white">The Importance of Design</h2>

              <div className="space-y-8 text-lg text-c-brown-800">
                <p>
                  We have spent years developing an understanding of 18 Brixton Rise and have
                  applied holistic and dynamic strategies in each stage of its expansion.
                </p>
                <p>
                  At the core of the design, we establish elements of accessibility, flow, light,
                  security and experience. These tactile and composed design elements connect all
                  personalised spaces and allow users to feel freedom in expressing individuality.
                  Brixton Hive has been designed thoughtfully to optimise each users experience.
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 w-full max-w-sm">
              <Image
                width="1281"
                quality="100"
                height="1969"
                src="/images/blakes-feast.png"
                className="rounded-lg shadow-lg"
              />
            </div>
          </ContentContainer>
        </div>
      </Container>
    </>
  );
}

const Svg = () => (
  <svg
    viewBox="0 0 791.94 567.55"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute bottom-0 left-0 z-0 transform lg:w-1/2 text-c-brown-600"
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
);
