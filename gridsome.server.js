// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

const { default: axios } = require('axios')

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(async (actions) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const posts = await axios.get(
      'https://manguito-blog-backend.herokuapp.com/posts'
    )

    const categories = await axios.get(
      'https://manguito-blog-backend.herokuapp.com/categories'
    )

    const postCollection = actions.addCollection({
      typeName: 'Post',
    })

    for (const post of posts.data) {
      postCollection.addNode({
        // uid: post.uid,
        id: post.uid,
        title: post.title,
        content: post.content,
        user: {
          id: post.user.id,
          username: post.user.username,
        },
        category: {
          id: post.category.uid,
          name: post.category.name,
        },
        cover: {
          id: post.cover.id,
          large: post.cover.formats.large.url,
          medium: post.cover.formats.medium.url,
          thumb: post.cover.formats.thumbnail.url,
        },
        date: post.created_at,
      })
    }

    const categoryCollection = actions.addCollection({
      typeName: 'Category',
    })

    for (const category of categories.data) {
      categoryCollection.addNode({
        // uid: category.uid,
        id: category.uid,
        name: category.name,
        posts: [...category.posts],
        date: category.created_at,
      })
    }
  })
}
