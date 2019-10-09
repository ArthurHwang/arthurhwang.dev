import { NextPage } from "next";
import marksy from "marksy/jsx";
import { createElement } from "react";

// 1. We create our marksy instance using the
// element factory from React
const compile = marksy({
  createElement,
  components: {
    MyCustomComponent(props) {
      return <h1>{props.children}</h1>;
    }
  }
});
const Article: NextPage<{ article: string }> = ({ article }) => {
  // 3. Here we get the article as a string and we compile it into
  //   console.log(props);
  // virtual dom
  console.log(compile);
  console.log(article);
  return <div>{compile(article).tree}</div>;
};
// 2. When Next prepares the component we go
// grab the markdown based on the name query
Article.getInitialProps = async ({ query }) => {
  const article = await import(`./${query.name}.md`);

  return {
    article: article.default
  };
};

export default Article;
