const path = require('path');

// blogページのペジネーション作成
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
  {
      allMdx(sort: {frontmatter: {date: DESC}}) {
          totalCount
          nodes {
              frontmatter {
                  slug
              }
          }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // ブログポストのテンプレートを取得
  // index.jsxだとgatsby側に自動生成されてcontextが設定できないため、ファイル名を変更している
  const blogPost = path.resolve('./src/pages/blog/blog.jsx');


  const TotalLength = result.data.allMdx.totalCount

  // ページネーションの設定
  const postsPerPage = 6;
  const numPages = Math.ceil( TotalLength / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/blog' : `/blog/${i + 1}`,
      component: blogPost,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};


