import Link from "next/link";
import styled from "styled-components";
interface Props {
  alt: string;
  date: string;
  image: string;
  title: string;
  url: string;
  description: string;
  readingTime: string;
}

export const Post: React.FC<Props> = ({
  alt,
  date,
  image,
  title,
  description,
  url,
  readingTime
}: Props) => {
  let parsedDate = new Date(date);

  console.log(readingTime);

  let transformedDate = `${parsedDate.getMonth() +
    1}/${parsedDate.getDate()}/${parsedDate.getFullYear()}`;

  return (
    <StyledPost>
      <Link
        href={`blog/${url
          .toLowerCase()
          .split(" ")
          .join("-")}`}
      >
        <div className="container">
          <div className="author-block">
            <img className="me" src="/static/me.jpg" />
            <div className="author-date">
              <p>Arthur Hwang</p>
              <p>
                {transformedDate} - {readingTime}
              </p>
            </div>
            {/* <p>{readingTime}</p> */}
          </div>

          <div className="image-block">
            <img className="image" alt={alt} src={image} />
          </div>
          <div className="text-block">
            <h2>{title}</h2>
            {/* <h4>{transformedDate}</h4> */}
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </StyledPost>
  );
};

const StyledPost = styled("div")`
  .container {
    overflow: hidden;
    /* text-align: center; */
    cursor: pointer;
    /* height: 453px; */
    width: 80%;
    margin: 0 auto 48px;
    /* margin-bottom: 48px; */
    position: relative;
    border: 1px solid black;
    /* padding: 2rem; */
    border: none;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.25);
    transition: transform 0.1s linear;

    @media (max-width: 768px) {
      width: 100%;
    }

    &:hover {
      transform: scale(1.01);
    }
  }

  .text-block {
    padding: 0.5rem 2rem 2rem;
    @media (max-width: 490px) {
      padding: 0 1rem 1rem;
    }

    h2,
    p {
      margin: 0;
    }
  }

  .image-block {
    position: relative;
    width: 100%;
    /* height: 250px; */
    /* height: auto; */
    /* max-height: 300px; */
    /* min-height: 200px; */
    /* height: 20%
     */
    /* min-height: 200px; */
    /* max-height: 350px; */
    /* padding: 0 16rem; */

    .image {
      object-fit: cover;
      object-position: center center;
      width: 100%;
      height: 100%;
      /* max-height: 350px; */
    }
  }

  .author-block {
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-template-rows: 50px;
    padding: 2rem;
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

  /* img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  } */
  /* a {
    border-bottom: none;
  }
  a:hover {
    border-bottom: none;
  }
  .text {
    padding: 24px;
    position: absolute;
    top: 0;

    & > * {
      color: red;
    }
  } */
  /* h2 {
    color: white;
    font-size: 24px;
    margin-bottom: 0;
  }
  h4 {
    color: rgba(255, 255, 255, 0.8);
    font-size: 16px;
    font-weight: 500;
    margin-top: 8px;
  } */
`;
