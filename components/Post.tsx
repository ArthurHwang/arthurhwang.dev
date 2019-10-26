// import Link from "next/link";
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
  const parsedDate = new Date(date);
  const transformedDate = `${parsedDate.getMonth() +
    1}/${parsedDate.getDate()}/${parsedDate.getFullYear()}`;

  return (
    <StyledPost>
      <a
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
          </div>

          <div className="image-block">
            <img className="image" alt={alt} src={image} />
          </div>
          <div className="text-block">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </StyledPost>
  );
};

const StyledPost = styled("div")`
  .container {
    overflow: hidden;
    cursor: pointer;
    width: 80%;
    margin: 0 auto 48px;
    position: relative;
    border: 1px solid black;
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

    .image {
      object-fit: cover;
      object-position: center center;
      width: 100%;
      height: 100%;
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
`;
