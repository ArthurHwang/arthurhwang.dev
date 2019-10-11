import Link from "next/link";

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
    <div className="container">
      <Link href={`blog/${url}`}>
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
};
