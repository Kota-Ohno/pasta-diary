const path = require('path');

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

// ペジネーション作成
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

  // 全てのカテゴリーを取得
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

  categories.forEach(category => {
    const categorySlug = `/blog/${category.fieldValue.toLowerCase()}/`;

    // カテゴリーごとのページネーションを考慮してページを生成
    const numCategoryPages = Math.ceil(category.totalCount / postsPerPage);

    Array.from({ length: numCategoryPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? categorySlug : `${categorySlug}${i + 1}`,
        component: categoryPage,
        context: {
          category: category.fieldValue,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numCategoryPages,
          currentPage: i + 1,
        },
      });
    });
  });
};


