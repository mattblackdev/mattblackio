import Head from 'next/head';
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
} from '../utils/site-config';

function absoluteUrl(path = '') {
  if (!path) return SITE_URL;
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export default function SEO({
  title,
  description,
  path = '',
  ogImage = DEFAULT_OG_IMAGE,
  type = 'website',
}) {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(ogImage);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
}
