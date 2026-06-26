import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import SEO from '../../../components/SEO';
import { getGlobalData } from '../../../utils/global-data';
import SectionSummary from '../../../components/SectionSummary';
import SectionWrapper from '../../../components/SectionWrapper';
import {
  sectionData,
  getSection,
  getSubsection,
} from '../../../utils/section-data';
import Breadcrumb from '../../../components/Breadcrumb';

export default function SubsectionPage({
  globalData,
  section,
  sectionInfo,
  subsectionData,
}) {
  return (
    <Layout>
      <SEO
        title={`${subsectionData.title} - ${globalData.name}`}
        description={subsectionData.summary}
        path={`/sections/${section}/${subsectionData.id}`}
      />
      <Header />
      <main className="px-10 w-full mx-auto mt-16">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: sectionInfo.title, href: `/sections/${section}` },
              { label: subsectionData.title, href: null },
            ]}
          />
          <h1 className="text-4xl mb-4">{subsectionData.title}</h1>
          {subsectionData.company && (
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {subsectionData.company}
              {subsectionData.location && ` | ${subsectionData.location}`}
              {subsectionData.period && ` | ${subsectionData.period}`}
            </p>
          )}
          {subsectionData.period && !subsectionData.company && (
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {subsectionData.period}
            </p>
          )}
          {subsectionData.description && (
            <p className="text-lg mb-8 text-justify">
              {subsectionData.description}
            </p>
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
                  link={`/sections/${section}/${subsectionData.id}/${subSubsection.id}`}
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

export function getStaticProps({ params }) {
  const globalData = getGlobalData();
  const sectionInfo = getSection(params.section);
  const subsectionData = getSubsection(params.section, params.subsection);

  if (!sectionInfo || !subsectionData) {
    return { notFound: true };
  }

  return {
    props: {
      globalData,
      section: params.section,
      sectionInfo,
      subsectionData,
    },
  };
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
