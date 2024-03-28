import React from "react";
import { Link } from "gatsby";
import { linkText } from "./postList.module.css";

const PostList = ({ posts }) => (
  <ul>
    {posts.map(({ node }) => (
      <article key={node.id}>
        <h2>
          <Link className={linkText} to={`/blog/${node.frontmatter.slug}`}>
            {node.frontmatter.title}
          </Link>
        </h2>
        <p>投稿: {node.frontmatter.date}</p>
      </article>
    ))}
  </ul>
);

export default PostList;
