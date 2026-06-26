import { generateSitemapXml } from '../utils/sitemap';

function Sitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSitemapXml();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default Sitemap;
