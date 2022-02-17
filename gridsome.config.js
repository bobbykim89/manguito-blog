// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Manguito Blog',
  siteDescription: 'Little blog for my tiny friend Manguito',
  plugins: [],
  icon: './src/favicon.png',
  templates: {
    Post: [
      {
        path: '/blog/post/:id',
        component: './src/templates/Post.vue',
      },
    ],
    Category: [
      {
        path: '/blog/category/:id',
        component: './src/templates/Category.vue',
      },
    ],
  },
}
