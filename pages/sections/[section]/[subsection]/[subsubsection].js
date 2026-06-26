import Layout from '../../../../components/Layout';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import SEO from '../../../../components/SEO';
import BulletList from '../../../../components/BulletList';
import { getGlobalData } from '../../../../utils/global-data';
import {
  sectionData,
  getSection,
  getSubsection,
  getSubSubsection,
} from '../../../../utils/section-data';
import Breadcrumb from '../../../../components/Breadcrumb';

export default function SubSubsectionPage({
  globalData,
  section,
  sectionInfo,
  subsectionData,
  subSubsectionData,
}) {
  return (
    <Layout>
      <SEO
        title={`${subSubsectionData.title} - ${globalData.name}`}
        description={subSubsectionData.summary}
        path={`/sections/${section}/${subsectionData.id}/${subSubsectionData.id}`}
      />
      <Header />
      <main className="px-10 w-full mx-auto mt-16">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: sectionInfo.title, href: `/sections/${section}` },
              {
                label: subsectionData.title,
                href: `/sections/${section}/${subsectionData.id}`,
              },
              { label: subSubsectionData.title, href: null },
            ]}
          />
          <h1 className="text-4xl mb-4">{subSubsectionData.title}</h1>
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
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <BulletList bullets={subSubsectionData.bullets} />
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
  const subSubsectionData = getSubSubsection(
    params.section,
    params.subsection,
    params.subsubsection
  );

  if (!sectionInfo || !subsectionData || !subSubsectionData) {
    return { notFound: true };
  }

  return {
    props: {
      globalData,
      section: params.section,
      sectionInfo,
      subsectionData,
      subSubsectionData,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];

  Object.keys(sectionData).forEach((section) => {
    sectionData[section].subsections.forEach((subsection) => {
      subsection.subSubsections?.forEach((subSubsection) => {
        paths.push({
          params: {
            section,
            subsection: subsection.id,
            subsubsection: subSubsection.id,
          },
        });
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
}
