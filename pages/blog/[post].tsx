import { Fragment } from "react";
import Head from "next/head";

Post.getInitialProps = async ({ query }) => {
  const client = require("contentful").createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
  });
  const getEntries = await client.getEntries();
  let payload = [];
  let post = [];
  const splitItems = Object.values(getEntries)[4];

  // @ts-ignore
  splitItems.forEach(entry => {
    payload.push(entry);
  });

  payload.forEach(item => {
    if (item.fields.url === query.post) {
      post.push(item);
    }
  });

  return {
    post,
    query
  };
};

export default function Post(props) {
  const post = props.post[0].fields;
  console.log(props);
  const {
    title,
    date,
    description,
    body,
    featureImage
    // url,
  } = post;
  return (
    <Fragment>
      <Head>
        <title>{`Arthur Hwang | ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <div>
        <p>{date}</p>
        <img
          src={featureImage.fields.file.url}
          alt={featureImage.fields.file.description}
        />
        {body}
      </div>
    </Fragment>
  );
}
