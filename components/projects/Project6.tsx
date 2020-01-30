import LazyLoad from "react-lazyload";
import Slider from "react-slick";
import { ProjectWrap } from "./ProjectWrap";
import { CommitList } from "../../components/CommitList";
import { FaGithub, FaPlay } from "react-icons/fa";
import { Button } from "../Button";
import { settings } from "../../util/slick-config";
import { ReactElement } from "react";

// keeb kraze
export const Project6: React.FC = (): ReactElement => {
  return (
    <ProjectWrap>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://toneify-arthurhwang.herokuapp.com/"
        className="link project-title"
      >
        Keeb Kraze
      </a>

      <div className="project split-grid-left">
        {/* 
            //@ts-ignore */}
        <Slider className="inner-slider" {...settings}>
          <img
            src="/static/projects/toneify/screenshot-1.webp"
            alt="screenshot 1"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = "/static/projects/toneify/screenshot-1.png";
            }}
          />
          <img
            src="/static/projects/toneify/screenshot-2.webp"
            alt="screenshot 2"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = "/static/projects/toneify/screenshot-2.png";
            }}
          />
          <img
            src="/static/projects/toneify/screenshot-4.webp"
            alt="screenshot 4"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = "/static/projects/toneify/screenshot-4.png";
            }}
          />
          <img
            src="/static/projects/toneify/screenshot-7.webp"
            alt="screenshot 7"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = "/static/projects/toneify/screenshot-7.png";
            }}
          />
          <img
            src="/static/projects/toneify/screenshot-5.webp"
            alt="screenshot 5"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = "/static/projects/toneify/screenshot-5.png";
            }}
          />
          <img
            src="/static/projects/toneify/screenshot-6.webp"
            alt="screenshot 6"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = "/static/projects/toneify/screenshot-6.png";
            }}
          />
        </Slider>
        <div className="commits">
          <LazyLoad once height={344}>
            <CommitList owner="ArthurHwang" name="keeb-kraze" />
          </LazyLoad>
        </div>
        <div className="accomplishments">
          <h3>Accomplishments:</h3>
          <ul>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident, voluptates maiores? Laboriosam est laborum amet eaque
              officiis maiores at odio architecto iure unde! Quia officia
              exercitationem delectus, corrupti iste earum necessitatibus sed
              quas quod temporibus nihil vero deleniti illo molestias natus
              tempore laudantium consequatur iusto soluta quae distinctio!
              Perferendis voluptatibus laboriosam enim quaerat non corporis
              quis, cum tempora nisi consequuntur consequatur hic maiores totam.
              Magni excepturi at consequatur veritatis cum ducimus, sunt vel
              porro iste aperiam reiciendis in amet repudiandae mollitia earum
              iure cupiditate rem blanditiis. Optio harum eius ex quibusdam
              atque quae accusantium veniam suscipit quod laborum molestiae,
              commodi sapiente deleniti temporibus ipsa, facere labore esse.
              Minus voluptatem laudantium qui fugiat eveniet a iste ratione
              neque vero aut alias dolorum, beatae reprehenderit, repellat
              voluptate, quibusdam tempore voluptates unde doloribus id ea!
              Dolores eos, voluptates quae tempora quia quos blanditiis
              asperiores molestias eius aut numquam repellendus explicabo, nam
              dolorum ipsam eveniet non magni necessitatibus? Accusantium porro
              ab autem deserunt mollitia cupiditate, dignissimos modi quos
              inventore at culpa praesentium dolorum in est aspernatur ipsum id
              illum provident amet quas velit omnis! Animi harum tenetur fugiat,
              necessitatibus adipisci similique veritatis asperiores
              perspiciatis deleniti sint neque laborum delectus exercitationem
              dolorem atque officiis quo.
            </li>
          </ul>
        </div>
      </div>
      <div className="badges">
        <img src="/static/projects/logos/React.png" alt="react" />
        <img src="/static/projects/logos/redux.png" alt="redux" />
        <img src="/static/projects/logos/nodejs.png" alt="nodejs" />
        <img src="/static/projects/logos/express.svg" alt="express" />
        <img src="/static/projects/logos/mongodb.svg" alt="mongodb" />
        <img
          style={{ width: "60px" }}
          src="/static/projects/logos/semantic.png"
          alt="semantic UI"
        />
        <img src="/static/projects/logos/stripe.png" alt="stripe" />
      </div>
      <div className="buttons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ArthurHwang/toneify"
        >
          <Button color="blue">
            Source <FaGithub />
          </Button>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://toneify-arthurhwang.herokuapp.com/"
        >
          <Button color="green">
            Launch <FaPlay />
          </Button>
        </a>
      </div>
    </ProjectWrap>
  );
};
