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

  console.log(props);
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
          alt={featureImage.fields.description}
        />
        {body}
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
    if (item.fields.url === query.post) {
      post.push(item);
    }
  });

  return {
    post,
    query
  };
};

export default Post;
