import React from "react";
import Link from "next/link";

function Post({ alt, date, image, title, url, id }) {
  console.log(id);
  console;
  return (
    <div className="container">
      <Link
        as={`blog${url}`}
        href={`blog${url}?id=${id}`}
      >
        <a>
          <img alt={alt} src={image} />
        </a>
      </Link>
      <div className="text">
        <h2>{title}</h2>
        <h4>{date}</h4>
      </div>
      <style jsx>{`
        .container {
          cursor: pointer;
          height: 453px;
          margin-bottom: 48px;
        }
        img {
          max-width: 400px;
        }
        a {
          border-bottom: none;
        }
        a:hover {
          border-bottom: none;
        }
        .text {
          margin-top: -160px;
          padding: 24px;
          position: absolute;
        }
        h2 {
          color: white;
          font-size: 24px;
          margin-bottom: 0;
        }
        h4 {
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          font-weight: 500;
          margin-top: 8px;
        }
      `}</style>
    </div>
  );
}

export default Post;
