import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Image from 'next/image';
import Container from '../components/Container';
import ContentContainer from '../components/ContentContainer';

export default function OurValues() {
  return (
    <>
      <Hero />
      <TransitionSection />
    </>
  );
}

const Hero = () => (
  <Container className="bg-c-gray-500">
    <ContentContainer>
      <div className="space-y-8 lg:space-y-0 lg:space-x-4 lg:flex">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-c-gray-900 lg:text-6xl">Our Values</h1>
        </div>

        <div className="flex-1">
          <div className="space-y-8 text-xl font-medium lg:space-y-16 text-c-gray-800">
            <p className="text-2xl text-c-gray-900">
              We endeavour to be a place that is home to a community of great humans reflecting a
              positive, inclusive and diverse culture.
            </p>

            <p>
              The Brixton Hive family strives to empower others, simplify the complexities of
              running businesses and life and live harmoniously in the environment we are current
              custodians of.
            </p>
            <p>
              We acknowledge the original custodians of this land, the Wurundjeri people who
              nurtured the Kooyongcoot Creek, who used it as a source of vegetation, food, tools and
              medicine, sustaining it for thousands of years with minimal impact on the environment.
              We delight in the opportunity to connect to the land daily and that its restoration to
              native vegetation is well under way. It’s a step out the door and we are immersed in
              this regenerating forest, we are grateful.
            </p>
          </div>
        </div>
      </div>
    </ContentContainer>
  </Container>
);

const TransitionSection = () => {
  const inputs = [1300, 1500];
  const { scrollY } = useViewportScroll();
  const color = useTransform(scrollY, inputs, ['#62685c', '#daded6']);
  const backgroundColor = useTransform(scrollY, inputs, ['#A3AD99', '#62685c']);

  return (
    <motion.div style={{ backgroundColor }}>
      <Container>
        <ContentContainer>
          <div className="space-y-8">
            <h2 className="text-3xl font-medium text-white">Caring for our environment</h2>

            <motion.div style={{ color }} className="space-y-8 text-lg">
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
                also find hives dotted carefully around the property. These hives are placed as such
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
            </motion.div>
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

              <motion.p style={{ color }} className="text-lg">
                We appreciate it is difficult to get started in new business. We consider short term
                scholarships to help start-ups get underway. We also value the in-put to humanity
                that non-for-profits provide and partner with several organisations. Please talk to
                us if you feel we could help you get started.
              </motion.p>
            </div>
          </ContentContainer>

          <ContentContainer>
            <div className="space-y-8">
              <h2 className="text-2xl font-medium text-white">The Importance of Design</h2>

              <motion.div style={{ color }} className="space-y-8 text-lg">
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
              </motion.div>
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
    </motion.div>
  );
};
