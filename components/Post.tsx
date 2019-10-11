import Link from "next/link";
import styled from "styled-components";

interface Props {
  alt: string;
  date: string;
  image: string;
  title: string;
  url: string;
}

export const Post: React.FC<Props> = ({
  alt,
  date,
  image,
  title,
  url
}: Props) => {
  return (
    <StyledPost>
      <Link href={`blog/${url}`}>
        <div className="container">
          {/* <a> */}
          <img alt={alt} src={image} />
          {/* </a> */}
          <div className="text">
            <h2>{title}</h2>
            <h4>{date}</h4>
          </div>
        </div>
      </Link>
    </StyledPost>
  );
};

const StyledPost = styled("div")`
  /* width: 200px; */

  .container {
    overflow: hidden;
    text-align: center;
    cursor: pointer;
    height: 453px;
    width: 100%;
    margin-bottom: 48px;
    position: relative;
    border: 1px solid black;
  }
  img {
    /* width: 600px; */
    /* object-fit: contain; */
    /* width: 100%; */

    /* width: 100%; */
    /* object-fit: contain; */

    /* object-fit: cover; */
    /* height: 100%; */
    object-fit: cover;
  }
  a {
    border-bottom: none;
  }
  a:hover {
    border-bottom: none;
  }
  .text {
    /* margin-top: -160px; */
    padding: 24px;
    position: absolute;
    top: 0;

    & > * {
      color: red;
    }

    /* text-align: center; */
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
`;
