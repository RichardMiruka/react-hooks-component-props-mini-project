import React from "react";
import Article from "./Article";

function ArticleList(props) {
  const { posts } = props;
  const articleComponents = posts.map((post) => (
    <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />
  ));
  return <main>{articleComponents}</main>;
}

export default ArticleList;
