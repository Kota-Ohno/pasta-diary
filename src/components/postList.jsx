import React from "react";
import { Link } from "gatsby";
import { linkText } from "./postList.module.css";
import { List, ListItem, ListItemText } from "@mui/material";

const PostList = ({ posts }) => (
  <List>
    {posts.map(({ node }) => (
      <ListItem key={node.id} alignItems="flex-start">
        <ListItemText
          primary={
            <Link className={linkText} to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          }
          secondary={`投稿: ${node.frontmatter.date}`}
        />
      </ListItem>
    ))}
  </List>
);

export default PostList;
