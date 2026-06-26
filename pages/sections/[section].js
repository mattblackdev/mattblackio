import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { getGlobalData } from '../../utils/global-data';
import SectionSummary from '../../components/SectionSummary';
import SectionWrapper from '../../components/SectionWrapper';
import { sectionData, getSection } from '../../utils/section-data';
import Breadcrumb from '../../components/Breadcrumb';

export default function SectionPage({ globalData, section, sectionInfo }) {
  return (
    <Layout>
      <SEO
        title={`${sectionInfo.title} - ${globalData.name}`}
        description={sectionInfo.subsections[0]?.summary || sectionInfo.title}
        path={`/sections/${section}`}
      />
      <Header />
      <main className="px-10 w-full mx-auto mt-16">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: sectionInfo.title, href: null },
            ]}
          />
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

export function getStaticProps({ params }) {
  const globalData = getGlobalData();
  const sectionInfo = getSection(params.section);

  if (!sectionInfo) {
    return { notFound: true };
  }

  return {
    props: {
      globalData,
      section: params.section,
      sectionInfo,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(sectionData).map((section) => ({
      params: { section },
    })),
    fallback: false,
  };
}
