import { useEffect, useState, Fragment } from "react";
import Head from "next/head";
import { NextPage } from "next";
import { Post } from "../../components/Post";
import styled from "styled-components";
import { client } from "../../services/blog";

const readingTime = require("reading-time");

const BlogHome: NextPage<any> = () => {
  async function fetchContentTypes() {
    const types = await client.getContentTypes();
    if (types.items) return types.items;
    console.log("Error getting Content Types.");
  }

  async function fetchEntriesForContentType(contentType: any) {
    const entries = await client.getEntries({
      content_type: contentType.sys,
      order: "-sys.createdAt"
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
  }, [posts]);
  return (
    // @ts-ignore
    <Fragment>
      <Head>
        <title>Arthur Hwang | Blog</title>
        <meta name="description" content="Arthur Hwang's Blog" />
      </Head>
      <StyledPosts>
        {posts.length > 0
          ? posts.map((p: any) => (
              <Post
                title={p.fields.title}
                description={p.fields.description}
                alt={p.fields.featureImage.fields.description}
                date={p.sys.createdAt}
                key={p.fields.title}
                image={p.fields.featureImage.fields.file.url}
                url={p.fields.title}
                readingTime={readingTime(p.fields.body).text}
              />
            ))
          : null}
      </StyledPosts>
    </Fragment>
  );
};

const StyledPosts = styled("div")`
  width: 100%;
  margin-top: 2rem;
`;

export default BlogHome;
