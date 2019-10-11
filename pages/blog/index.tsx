import { useEffect, useState, Fragment } from "react";
import Head from "next/head";
import { NextPage } from "next";
import { Post } from "../../components/Post";

const client = require("contentful").createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
});

const HomePage: NextPage<any> = () => {
  async function fetchContentTypes() {
    const types = await client.getContentTypes();
    if (types.items) return types.items;
    console.log("Error getting Content Types.");
  }

  async function fetchEntriesForContentType(contentType: any) {
    const entries = await client.getEntries({
      content_type: contentType.sys
    });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const contentTypes = await fetchContentTypes();
      const allPosts = await fetchEntriesForContentType(contentTypes);
      //@ts-ignore
      setPosts([...allPosts]);
    }
    getPosts();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Arthur Hwang | Blog</title>
        <meta name="description" content="Arthur Hwang's Blog" />
      </Head>
      {posts.length > 0
        ? posts.map((p: any) => (
            <Post
              alt={p.fields.featureImage.fields.description}
              date={p.fields.date}
              key={p.fields.title}
              image={p.fields.featureImage.fields.file.url}
              title={p.fields.title}
              url={p.fields.url}
            />
          ))
        : null}
    </Fragment>
  );
};

export default HomePage;
