import Head from "next/head";
import Disqus from "disqus-react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import CodeBlock from "../../components/CodeBlock";
import LazyLoad from "react-lazyload";
import { Fragment } from "react";
import { NextPage } from "next";
import { client } from "../../services/blog";

interface Props {
  query: any;
}

const readingTime = require("reading-time");

const Post: NextPage<any> = props => {
  const post = props.post[0].fields;
  const parsedDate = new Date(props.post[0].sys.createdAt);
  const { title, description, body, featureImage } = post;
  const readTime = readingTime(body).text;
  const canonicalURL = `https://arthurhwang.dev/blog/${title
    .toLowerCase()
    .split(" ")
    .join("-")}`;
  const transformedDate = `${parsedDate.getMonth() +
    1}/${parsedDate.getDate()}/${parsedDate.getFullYear()}`;

  const disqusShortname = "arthurhwang-dev";
  const disqusConfig = {
    url: canonicalURL,
    identifier: props.post[0].sys.id,
    title: title
  };

  return (
    <Fragment>
      <Head>
        <title>{`Arthur Hwang's Blog | ${title}`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalURL} />
      </Head>
      <ContentWrap>
        <h1>{title}</h1>
        <p className="post-description">{description}</p>
        <div className="author-block">
          <img className="me" src="/static/me.jpg" alt="Arthur Hwang" />
          <div className="author-date">
            <p>
              <span>by</span> Arthur Hwang
            </p>
            <p>
              {transformedDate} -{" "}
              <span style={{ color: "#FE4A49", fontWeight: 600 }}>
                {readTime}
              </span>
            </p>
          </div>
        </div>
        <img
          width="100%"
          src={featureImage.fields.file.url + "?fm=webp"}
          alt={featureImage.fields.description}
          onError={(e: any) => {
            e.target.onerror = null;
            e.target.src = featureImage.fields.file.url;
          }}
        />
        <ReactMarkdown
          className="markdown"
          renderers={{ code: CodeBlock }}
          source={body}
        />
        <LazyLoad>
          <div style={{ marginTop: "4rem" }}>
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </LazyLoad>
      </ContentWrap>
    </Fragment>
  );
};

Post.getInitialProps = async ({ query }: Props) => {
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
    post
  };
};

export default Post;

const ContentWrap = styled("div")`
  .post-description {
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 1rem;

    @media (max-width: 490px) {
      font-size: 1.6rem;
      text-align: left;
    }
  }

  .author-block {
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-template-rows: 50px;
    padding: 0 0 2rem 0;
    grid-gap: 1rem;
    align-items: center;

    @media (max-width: 490px) {
      padding: 0 0 1rem 0;
    }

    .author-date {
      p {
        margin: 0;
        line-height: 1.5;

        &:first-child {
          color: ${({ theme }) => theme.black};
          font-weight: 600;
        }
      }
    }

    .me {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.accent};
      object-fit: cover;
    }
  }

  .markdown {
    blockquote {
      margin-top: 0;
      /* background: ${({ theme }) => theme.lightgrey}; */
      p {
        text-align: center;
        font-style: italic;
        color: ${({ theme }) => theme.black};
        margin-top: 0;
        font-weight: 800;
      }
    }
    a {
      text-decoration: none;
      font-weight: 600;
      background-image: linear-gradient(
        to right,
        #4ad7d1,
        #4ad7d1 50%,
        #3454d1 50%
      );
      background-position: 100%;
      background-size: 200% 100%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: all 0.4s;

      &:hover {
        background-position: 0%;
      }
    }
  }

  code {
    padding: 0;
    background-color: rgb(245, 242, 240);
    color: ${({ theme }) => theme.secondaryAccent};
  }

  h1 {
    margin-bottom: 0;
    margin-top: 0;
    font-size: 4rem;
    line-height: 5rem;

    @media (max-width: 490px) {
      font-size: 3rem;
      line-height: 4rem;
    }
  }
  pre {
    overflow: auto;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      height: 5px;
    }
    &::-webkit-scrollbar-track {
      background-color: #001730;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #4ad7d1;
    }
    &::-webkit-scrollbar-corner {
      background-color: #001730;
    }
  }

  img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
`;
