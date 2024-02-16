import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import Image from 'next/image';

const description =
  'Sr. Software Engineer with 10 years of experience in web, mobile, desktop, cross-platform, and 3D application development. Proficient in mobile and web architecture, training & development, performance optimization, and robotic process automation.';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={description} />
      <Header />
      <main className="w-full">
        <div className="w-full flex justify-center items-center mt-16">
          <Image
            className="rounded-full"
            width="174"
            height="174"
            src="/profile_pic.png"
            alt="profile headshot of a handsome man stading in front of glass windows"
          />
        </div>
        <div className="px-10 w-full mx-auto mt-16">
          <p className="mb-16 text-justify">{description}</p>
          <h2 id="projects" className="text-4xl mt-4 mb-7">
            Projects
          </h2>
          <h3 className="font-bold mb-2">Black Diamond Mobile App</h3>
          <p className="mb-7 text-justify">
            Lead an agile team with training, development, automation and App
            Store expertise to develop and support the Black Diamond Wealth
            Platform app for iOS and Android. The react-native codebase (app)
            was customizable in order to be branded for clients. It was sold to
            hundreds of financial advisory firms. We actively managed 233+ apps,
            Apple Developer accounts and Google Play store accounts via internal
            tooling built on top of Fastlane, BitRise, Microsoft AppCenter
            (CodePush), AWS SNS, BugSnag, and other services. The total user
            base consists of over 100,000 investors and financial advisors.
          </p>
          <h3 className="font-bold mb-2">StickRPG 4D</h3>
          <p className="text-justify">
            Launched a 3D web game using React, R3F, and ThreeJS. Designed and
            developed custom interactive environments, third-person character
            controls, dynamic physics, real-time lighting and shadows,
            animations, independent game systems, NPC dialog, branching
            storyline, and visual and audio eﬀects.
            <br />
            <Link href="https://stickrpg4d.com">
              <a className="underline text-blue-300 hover:text-primary">
                www.stickrpg4d.com
              </a>
            </Link>
          </p>
          <h2 id="contact" className="text-4xl mt-16 mb-7">
            Contact
          </h2>
          <div>
            <Link href="mailto:matt@mattblack.dev">
              <a className="font-extrabold mx-2 leading-loose hover:text-primary">
                Email: matt@mattblack.dev
              </a>
            </Link>
          </div>
          <div>
            <Link href="tel:+19042489051">
              <a className="font-extrabold mx-2 leading-loose hover:text-primary">
                Cell: +1-904-248-9051
              </a>
            </Link>
            <div>
              <Link href="https://www.linkedin.com/in/matt-black-software">
                <a className="font-extrabold mx-2 leading-loose hover:text-primary">
                  LinkedIn
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
