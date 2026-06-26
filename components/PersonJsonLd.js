import Head from 'next/head';
import { SITE_URL, DEFAULT_OG_IMAGE } from '../utils/site-config';

export default function PersonJsonLd({ name, jobTitle, email, linkedIn }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    email,
    url: SITE_URL,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    sameAs: [linkedIn],
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}
