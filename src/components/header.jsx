import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Grid } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';

import {
  header,
  headerIcon,
  headerTitle,
  headerTitleGroup,
  navLinks,
  navLinkItem,
} from "./header.module.css";

import Icon from "./icon";

const Header = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Grid xs={12} className={`${className} ${header}`}>
      <Toolbar>
        <Link to="/" className={headerTitleGroup}>
          <Icon className={headerIcon}></Icon>
          <Grid className={headerTitle} sx={{ display: { xs: 'none', sm: 'none', md: 'block'  } }}>
            {data.site.siteMetadata.title}
          </Grid>
        </Link>
      </Toolbar>
      <Toolbar className={navLinks}>
        <Link className={navLinkItem} to="/">
          Home
        </Link>
        <Link className={navLinkItem} to="/about">
          About
        </Link>
        <Link className={navLinkItem} to="/blog">
          Blog
        </Link>
      </Toolbar>
    </Grid>
  );
};

export default Header;
