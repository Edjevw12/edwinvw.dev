import { siteMetadata } from '@/data/siteMetaData';
import Head from 'next/head';

export const Meta = () => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover"
      />
      <meta property="og:locale" content={siteMetadata.language} />
      <meta property="og:type" content="website" />
      <meta
        name="description"
        content={siteMetadata.description}
        key="description"
      />
      <meta
        property="og:site_name"
        content={siteMetadata.title}
        key="site_name"
      />
      <meta
        property="og:title"
        key="og_title"
        content={siteMetadata.headerTitle}
      />
      <meta property="og:url" key="og_url" content={siteMetadata.siteUrl} />
    </Head>
  );
};
