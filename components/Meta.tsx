import Head from "next/head";
import { ReactElement } from "react";

interface Props {
  pathName: string;
}

export const Meta: React.FC<Props> = ({ pathName }): ReactElement => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta
      name="google-site-verification"
      content="kUMsNfzj7yLDMmFm-WDha-95b5DKsgp32nEnQmxP1wM"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/static/favicon/site.webmanifest" />
    {!pathName.includes("[post]") && (
      <link rel="canonical" href={`https://arthurhwang.dev${pathName}`} />
    )}
    <title>ArthurHwang.dev</title>
  </Head>
);
