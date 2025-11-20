import { useRouter } from 'next/router';
import Layout from '../../../../components/Layout';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import SEO from '../../../../components/SEO';
import { getGlobalData } from '../../../../utils/global-data';
import Link from 'next/link';
import { sectionData } from '../../../../utils/section-data';

export default function SubSubsectionPage({ globalData }) {
  const router = useRouter();
  const { section, subsection, subsubsection } = router.query;

  const sectionInfo = sectionData[section];
  const subsectionData = sectionInfo?.subsections?.find((sub) => sub.id === subsection);
  const subSubsectionData = subsectionData?.subSubsections?.find((subSub) => subSub.id === subsubsection);

  if (!sectionInfo || !subsectionData || !subSubsectionData) {
    return (
      <Layout>
        <SEO title="Sub-subsection Not Found" description="Sub-subsection not found" />
        <Header />
        <main className="px-10 w-full mx-auto mt-16">
          <h1 className="text-4xl mb-4">Sub-subsection Not Found</h1>
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
      <SEO title={`${subSubsectionData.title} - ${globalData.name}`} description={subSubsectionData.summary} />
      <Header />
      <main className="px-10 w-full mx-auto mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href={`/sections/${section}/${subsection}`}>
              <a className="text-blue-500 hover:underline inline-flex items-center">
                ← Back to {subsectionData.title}
              </a>
            </Link>
          </div>
          <h1 className="text-4xl mb-4">{subSubsectionData.title}</h1>
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
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {subSubsectionData.content}
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
      subsection.subSubsections?.forEach((subSubsection) => {
        paths.push({
          params: { section, subsection: subsection.id, subsubsection: subSubsection.id },
        });
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
}

