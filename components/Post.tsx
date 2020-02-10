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
            <img className="me" src="/static/me.jpg" alt="Arthur Hwang" />
            <div className="author-date">
              <p>Arthur Hwang</p>
              <p>
                {transformedDate} -{" "}
                <span style={{ color: "#FE4A49" }}>{readingTime}</span>
              </p>
            </div>
          </div>
          <div className="image-block">
            <img
              className="image"
              alt={alt}
              src={image + "?fm=webp"}
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.src = image;
              }}
            />
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

    &:hover {
      transform: scale(1.01);
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .text-block {
    padding: 0.5rem 2rem 2rem;
    background: ${({ theme }) => theme.bg.white};
    @media (max-width: 490px) {
      padding: 0 1rem 1rem;
    }

    h2,
    p {
      margin: 0;
    }

    @media (max-width: 490px) {
      h2 {
        line-height: 3.5rem;
      }
      p {
        line-height: 2.5rem;
      }
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
    background: ${({ theme }) => theme.bg.white};
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
