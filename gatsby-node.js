const path = require('path');

// ページ生成時処理
exports.onCreatePage = ({ page, actions }) => {
  const { deletePage } = actions;
  
  // blog/blogを削除
  if (page.path === '/blog/blog/') {
    deletePage(page);
  }
  // blog/categoryを削除
  if (page.path === '/blog/category/') {
    deletePage(page);
  }
};

// ページ生成の共通処理
const createPaginationPages = (createPage, items, pathPrefix, component, postsPerPage, additionalContext = {}) => {
  const numPages = Math.ceil(items.totalCount / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? pathPrefix : `${pathPrefix}${i + 1}`,
      component,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        ...additionalContext,
      },
    });
  });
};

// ページ作成
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // ページネーションの設定
  const postsPerPage = 5;

  // 一覧ページ生成
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

  // ブログページの生成処理
  createPaginationPages(createPage, result.data.allMdx, '/blog/', blogPost, postsPerPage);


  // カテゴリー別ページ生成
  const categoriesResult = await graphql(`
    {
      allMdx {
        group(field: {frontmatter: {categories: SELECT}}) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  if (categoriesResult.errors) {
    throw categoriesResult.errors;
  }

  const categories = categoriesResult.data.allMdx.group;

  // カテゴリーページのテンプレートを取得
  const categoryPage = path.resolve('./src/pages/blog/category.jsx');

  // カテゴリーページの生成処理
  categories.forEach(category => {
    createPaginationPages(createPage, category, `/blog/${category.fieldValue.toLowerCase()}/`, categoryPage, postsPerPage, { category: category.fieldValue });
  });
};


