import React, { useState, useEffect, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Header from "./header";
import LeftSidebar from "./leftSidebar";
import RightSidebar from "./rightSidebar";
import Main from "./main";
import Footer from "./footer";
import { Grid } from "@mui/material";

// 余白部分を消去するのに必要
import "../styles/styles.css";

const Layout = ({ pageTitle, children }) => {
  const headerRef = useRef(null); // ヘッダーのrefを作成
  const [headerHeight, setHeaderHeight] = useState(0); // ヘッダーの高さを保存するステート
  const footerRef = useRef(null); // フッターのrefを作成
  const [footerHeight, setFooterHeight] = useState(0); // フッターの高さを保存するステート

  useEffect(() => {
    // ヘッダーの高さを取得してステートを更新
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
    // フッターの高さを取得してステートを更新
    if (footerRef.current) {
      setFooterHeight(footerRef.current.offsetHeight);
    }
  }, []); // 空の依存配列を指定して、コンポーネントのマウント時にのみ実行

  return (
    <Grid container sx={{ height: '100%', width: '100%', alignItems: 'flex-start' }}>
      <StaticImage
        alt="スパゲティ"
        src="../images/background.jpg"
        style={{ position: "absolute", height: '100%', width: '100%', zIndex: -2 }}
      />
      <Grid item xs={12} ref={headerRef}>
        <Header></Header>
      </Grid>
      <Grid item md={2} sx={{ display: { xs: 'none', md: 'block' } }}>
        <LeftSidebar></LeftSidebar>
      </Grid>
      <Grid item xs={12} md={8} sx={{
        height: `calc(100vh - ${headerHeight}px - ${footerHeight}px)`, // ヘッダーの高さを使用
        overflowY: 'scroll',
        '-ms-overflow-style': 'none', // IE, Edge対応
        'scrollbar-width': 'none', // Firefox対応
        '&::-webkit-scrollbar': {
          display: 'none', // Chrome, Safari対応
        }
      }}>
        <Main pageTitle={pageTitle}>{children}</Main>
      </Grid>
      <Grid item md={2} sx={{ display: { xs: 'none', md: 'block' } }}>
        <RightSidebar></RightSidebar>
      </Grid>
      <Grid item xs={12} sx={{ display: { md: 'none' } }} ref={footerRef}>
        <Footer></Footer>
      </Grid>
    </Grid>
  );
};

export default Layout;
