import { Fragment } from "react";
import { NextPage } from "next";
import Head from "next/head";

interface Props {
  query: any;
}

const Post: NextPage<any> = props => {
  const post = props.post[0].fields;
  const {
    title,
    date,
    description,
    body,
    featureImage
    // url,
  } = post;

  const canonicalURL = `https://arthurhwang.dev/${title
    .toLowerCase()
    .split(" ")
    .join("-")}`;

  return (
    <Fragment>
      <Head>
        <title>{`Arthur Hwang | ${title}`}</title> */}
        <meta name="description" content={description} />
        <link rel="cacnonical" href={canonicalURL} />
      </Head>
      <div>
        <p>{date}</p>
        <img
          width="100%"
          src={featureImage.fields.file.url}
          alt={featureImage.fields.description}
        />
        <p>{body}</p>
      </div>
    </Fragment>
  );
};

Post.getInitialProps = async ({ query }: Props) => {
  const client = require("contentful").createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
  });
  const getEntries = await client.getEntries();

  let payload: any = [];
  let post: any = [];
  const splitItems = Object.values(getEntries)[4];

  // @ts-ignore
  splitItems.forEach(entry => {
    payload.push(entry);
  });

  payload.forEach((item: any) => {
    if (
      item.fields.title
        .toLowerCase()
        .split(" ")
        .join("-") === query.post
    ) {
      post.push(item);
    }
  });

  return {
    post,
    query
  };
};

export default Post;
