import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import SectionSummary from '../components/SectionSummary';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';

const description =
  'Highly skilled and results driven senior software engineer with 10 years of experience in full stack web, mobile, and cross-platform application development. Proficient in React and React Native, cloud, enterprise, and micro-service architectures. Skilled in CI/CD, end-to-end automated testing, and process automation. Experienced in IT leadership, mentorship, feature estimation, development & debugging, dependency upgrades, and tech migrations. Passionate about learning and contributing to the tech community through speaking and attending conferences, local meetups, and contributing to open source. Values collaboration with cross-functional teams to create applications that meet user needs, provide business value, and deliver great experiences. Team player and servant leader. Proficient with Cursor AI IDE.';

const SectionWrapper = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '200px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function Index({ globalData }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Create audio element on mount
    audioRef.current = new Audio('/hi.mp3');

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleProfileClick = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      // If playing, pause it
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // If not playing, always start from the beginning
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('play', handlePlay);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('play', handlePlay);
    };
  }, []);

  return (
    <Layout>
      <SEO title={globalData.name} description={description} />
      <Header />
      <main className="w-full">
        <motion.div
          className="w-full flex justify-center items-center mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="relative cursor-pointer"
            onClick={handleProfileClick}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <Image
              alt="profile headshot of a handsome man stading in front of glass windows"
              className="rounded-full relative z-10"
              src="/profile_pic.png"
              width="174"
              height="174"
              priority
              unoptimized
            />
            {/* Audio icon */}
            <motion.div
              className="absolute bottom-0 right-0 z-20"
              initial={{ opacity: 0.6 }}
              animate={{
                opacity: isPlaying ? 0.9 : 0.6,
                scale: isPlaying ? [1, 1.05, 1] : 1,
              }}
              transition={{
                opacity: { duration: 0.2 },
                scale: {
                  duration: 1.2,
                  repeat: isPlaying ? Infinity : 0,
                  ease: 'easeInOut',
                },
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <path
                  d="M15.54 8.46a5 5 0 0 1 0 7.07"
                  opacity={isPlaying ? 1 : 0.6}
                />
                {isPlaying && (
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" opacity={0.7} />
                )}
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="px-10 w-full mx-auto mt-16">
          <SectionWrapper delay={0.2}>
            <motion.p
              className="text-justify"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {description}
            </motion.p>
          </SectionWrapper>

          <SectionWrapper delay={0.3}>
            <div id="experience" className="mt-12 scroll-mt-20">
              <SectionSummary
                title="Work Experience"
                summary="10+ years of experience building full-stack web and mobile applications. Recent work includes React Native mobile apps, Next.js web applications, GraphQL APIs, and comprehensive DevOps pipelines. Led teams, architected systems, and delivered products used by 100,000+ users."
                link="/sections/experience"
                delay={0.1}
              />
            </div>
          </SectionWrapper>

          <SectionWrapper delay={0.3}>
            <div id="education" className="scroll-mt-20">
              <SectionSummary
                title="Education"
                summary="Studied Software Development at ITT Technical Institute (2014-2016). Focused on building a strong foundation in software engineering principles and practical development skills."
                link="/sections/education"
                delay={0.1}
              />
            </div>
          </SectionWrapper>

          <SectionWrapper delay={0.3}>
            <div id="volunteer" className="scroll-mt-20">
              <SectionSummary
                title="Volunteer Experience"
                summary="Active in the tech community and beyond. Teaching middle school robotics, speaking at conferences, co-organizing ReactJAX meetup for 5 years, and contributing through audio/video production and music."
                link="/sections/volunteer"
                delay={0.1}
              />
            </div>
          </SectionWrapper>

          <SectionWrapper delay={0.3}>
            <div id="skills" className="scroll-mt-20">
              <SectionSummary
                title="Skills"
                summary="Comprehensive expertise across the full stack: React, React Native, Next.js, TypeScript, Node.js, GraphQL, PostgreSQL, AWS, and more. Strong in DevOps, testing, authentication, and cloud infrastructure. Experience with 3D development, GIS, and legacy systems."
                link="/sections/skills"
                delay={0.1}
              />
            </div>
          </SectionWrapper>

          <SectionWrapper delay={0.3}>
            <div id="projects" className="scroll-mt-20">
              <SectionSummary
                title="Projects"
                summary="StickRPG 4D - A 3D web game built with React, React Three Fiber, and Three.js. Features custom interactive environments, third-person controls, physics, real-time lighting, NPC dialog, and branching storylines."
                link="/sections/projects"
                delay={0.1}
              />
            </div>
          </SectionWrapper>

          <SectionWrapper delay={0.3}>
            <motion.h2
              id="contact"
              className="text-4xl mt-20 mb-7 scroll-mt-20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Contact
            </motion.h2>
            <div>
              <motion.a
                href="mailto:matt@mattblack.dev"
                className="font-extrabold mx-2 leading-loose hover:text-primary inline-block"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                matt@mattblack.dev
              </motion.a>
            </div>
            <div>
              <motion.a
                href="tel:+19042489051"
                className="font-extrabold mx-2 leading-loose hover:text-primary inline-block"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                +1-904-248-9051
              </motion.a>
            </div>
            <div>
              <motion.a
                href="https://www.linkedin.com/in/matt-black-software"
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold mx-2 leading-loose hover:text-primary inline-block"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                LinkedIn
              </motion.a>
            </div>
          </SectionWrapper>
        </div>
      </main>
      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();

  return { props: { globalData } };
}
