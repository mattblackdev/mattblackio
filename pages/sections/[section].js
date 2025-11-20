import { useRouter } from 'next/router';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { getGlobalData } from '../../utils/global-data';
import Link from 'next/link';
import SectionSummary from '../../components/SectionSummary';
import { sectionData } from '../../utils/section-data';

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

export default function SectionPage({ globalData }) {
  const router = useRouter();
  const { section } = router.query;

  const sectionInfo = sectionData[section];

  if (!sectionInfo) {
    return (
      <Layout>
        <SEO title="Section Not Found" description="Section not found" />
        <Header />
        <main className="px-10 w-full mx-auto mt-16">
          <h1 className="text-4xl mb-4">Section Not Found</h1>
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
      <SEO title={`${sectionInfo.title} - ${globalData.name}`} description={sectionInfo.title} />
      <Header />
      <main className="px-10 w-full mx-auto mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/">
              <a className="text-blue-500 hover:underline inline-flex items-center">
                ← Back to home
              </a>
            </Link>
          </div>
          <h1 className="text-4xl mb-8">{sectionInfo.title}</h1>
          
          <div className="space-y-4">
            {sectionInfo.subsections.map((subsection, index) => (
              <SectionWrapper key={subsection.id} delay={index * 0.1}>
                <SectionSummary
                  title={subsection.title}
                  summary={subsection.summary}
                  link={`/sections/${section}/${subsection.id}`}
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
  return {
    paths: Object.keys(sectionData).map((section) => ({
      params: { section },
    })),
    fallback: false,
  };
}

