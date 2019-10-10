import { Fragment } from "react";
import Head from "next/head";

export default function ErrorPage() {
  return (
    <Fragment>
      <Head>
        <title>Error Boundary</title>
        <meta name="description" content="error page, oh noes" />
      </Head>
      <div>You have reached a page that does not exist......so sad today</div>
    </Fragment>
  );
}
