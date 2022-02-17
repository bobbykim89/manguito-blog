// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Manguito Blog',
  plugins: [
    // {
    //   use: '@gridsome/source-strapi',
    //   options: {
    //     apiURL: 'https://manguito-blog-backend.herokuapp.com/',
    //     queryLimit: 1000, // Defaults to 100
    //     contentTypes: ['post', 'category'],
    //     // Possibility to login with a Strapi user,
    //     // when content types are not publicly available (optional).
    //     loginData: {
    //       identifier: '',
    //       password: '',
    //     },
    //   },
    // },
  ],
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
