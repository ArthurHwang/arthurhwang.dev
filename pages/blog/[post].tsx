import { Fragment } from "react";
import { NextPage } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import CodeBlock from "../../components/CodeBlock";

interface Props {
  query: any;
}

const Post: NextPage<any> = props => {
  const post = props.post[0].fields;
  const parsedDate = new Date(props.post[0].sys.createdAt);
  const transformedDate = `${parsedDate.getMonth() +
    1}/${parsedDate.getDate()}/${parsedDate.getFullYear()}`;

  // console.log(t)
  const {
    title,
    // date,
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
      <ContentWrap>
        <h1>{title}</h1>
        <div className="author-block">
          <img className="me" src="/static/me.jpg" />
          <div className="author-date">
            <p>
              <span>by</span> Arthur Hwang
            </p>
            <p>{transformedDate}</p>
          </div>
        </div>
        <img
          width="100%"
          src={featureImage.fields.file.url}
          alt={featureImage.fields.description}
        />
        <ReactMarkdown
          className="markdown"
          renderers={{ code: CodeBlock }}
          source={body}
        />
        {/* <p>{body}</p> */}
      </ContentWrap>
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

const ContentWrap = styled("div")`

  .author-block {
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-template-rows: 50px;
    padding: 0 0 2rem 0;
    grid-gap: 1rem;
    align-items: center;

    @media (max-width: 490px) {
      padding: 1rem;
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




 a {
      text-decoration: none;
  font-weight: 600;
  background-image: linear-gradient(to right,#4AD7D1,#4AD7D1 50%,#3454d1 50%);
  background-position: 100%;
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    transition: all .4s;

  &:hover {
    background-position: 0%;
  }
}




  }

  code {
    background-color: rgb(245, 242, 240);
    color: ${({ theme }) => theme.secondaryAccent};
  }


h1 {
  margin-bottom: 0;
  @media(max-width:490px) {
    font-size: 2.4rem;
  }
}
  pre {
    overflow: auto ;
    overflow-y: hidden;
    /* background-color: ${({ theme }) => theme.lightgrey}; */


    

    
  &::-webkit-scrollbar {
    /* width: 2px !important; */
    height:5px;
  }
  &::-webkit-scrollbar-track {
    background-color:#001730;
    /* width: 5px; */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #4AD7D1;
    /* width: 5px; */
  }
  /* &::-webkit-scrollbar-button {
    background-color: ${({ theme }) => theme.colors.secondary};
  } */
  &::-webkit-scrollbar-corner {
    background-color: #001730;
  }
  }
  img {
    width: 100%;
  }
`;
