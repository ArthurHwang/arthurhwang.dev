import React from "react";

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
    if (item.fields.url === `/${query.name}`) {
      post.push(item);
    }
  });

  return {
    post
  };
};

export default function Post(props) {
  const post = props.post[0].fields;
  const { title, date, description, image, alt, url, body } = post;
  console.log(body);
  return <div>{body}</div>;
}
