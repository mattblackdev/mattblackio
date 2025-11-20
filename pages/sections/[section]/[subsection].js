import { useRouter } from 'next/router';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import SEO from '../../../components/SEO';
import { getGlobalData } from '../../../utils/global-data';
import Link from 'next/link';
import SectionSummary from '../../../components/SectionSummary';
import { sectionData } from '../../../utils/section-data';

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

export default function SubsectionPage({ globalData }) {
  const router = useRouter();
  const { section, subsection } = router.query;

  const sectionInfo = sectionData[section];
  const subsectionData = sectionInfo?.subsections?.find((sub) => sub.id === subsection);

  if (!sectionInfo || !subsectionData) {
    return (
      <Layout>
        <SEO title="Subsection Not Found" description="Subsection not found" />
        <Header />
        <main className="px-10 w-full mx-auto mt-16">
          <h1 className="text-4xl mb-4">Subsection Not Found</h1>
          <Link href="/">
            <a className="text-blue-500 hover:underline">← Back to home</a>
          </Link>
        </main>
        <Footer copyrightText={globalData.footerText} />
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title={`${subsectionData.title} - ${globalData.name}`} description={subsectionData.summary} />
      <Header />
      <main className="px-10 w-full mx-auto mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href={`/sections/${section}`}>
              <a className="text-blue-500 hover:underline inline-flex items-center">
                ← Back to {sectionInfo.title}
              </a>
            </Link>
          </div>
          <h1 className="text-4xl mb-4">{subsectionData.title}</h1>
          {subsectionData.company && (
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {subsectionData.company} {subsectionData.location && `| ${subsectionData.location}`} {subsectionData.period && `| ${subsectionData.period}`}
            </p>
          )}
          {subsectionData.period && !subsectionData.company && (
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {subsectionData.period}
            </p>
          )}
          {subsectionData.description && (
            <p className="text-lg mb-8 text-justify">{subsectionData.description}</p>
          )}
          {subsectionData.link && (
            <div className="mb-8">
              <a
                href={subsectionData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline inline-flex items-center font-semibold"
              >
                Visit Project →
              </a>
            </div>
          )}
          
          <div className="space-y-4">
            {subsectionData.subSubsections?.map((subSubsection, index) => (
              <SectionWrapper key={subSubsection.id} delay={index * 0.1}>
                <SectionSummary
                  title={subSubsection.title}
                  summary={subSubsection.summary}
                  link={`/sections/${section}/${subsection}/${subSubsection.id}`}
                  delay={0}
                />
              </SectionWrapper>
            ))}
          </div>
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

export async function getStaticPaths() {
  const paths = [];
  
  Object.keys(sectionData).forEach((section) => {
    sectionData[section].subsections.forEach((subsection) => {
      paths.push({
        params: { section, subsection: subsection.id },
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
}

