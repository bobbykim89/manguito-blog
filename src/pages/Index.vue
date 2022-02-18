<template>
  <Layout class="content">
    <Hero :urls="getHeroImages" class="mb-5" />
    <div class="container">
      <blockquote class="blockquote text-center">
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, facilis
          animi temporibus pariatur ducimus quaerat aliquam iste consequatur
          tempora? Eligendi error neque officia ipsum ducimus. Cum magnam vero
          dolore corporis id dolorum atque ut voluptates laboriosam unde rerum
          veniam, a quod nisi placeat fugit repellendus accusantium odit optio
          esse blanditiis.
        </p>
        <hr class="w-25  hr-yellow" />
      </blockquote>
      <h2 class="display-4 mt-5 ml-2">Latest Posts</h2>
      <b-card-group
        class="mt-4 mb-5 row row-cols-1 row-cols-md-2 row-cols-lg-4"
      >
        <g-link
          v-for="(post, index) in posts.slice(0, 4)"
          :key="index"
          :to="post.node.path"
        >
          <card-degree-image
            :image-source="post.node.cover.thumb"
            :image-alt="post.node.title"
            :title="post.node.title"
            :label="post.node.category.name"
            label-background="danger"
            border-variant="gray-2"
            class="mx-2 shadow"
          >
            <div>
              <p class="card-content">
                {{ post.node.content.substring(0, 50) + '...' }}
              </p>
            </div>
          </card-degree-image>
        </g-link>
      </b-card-group>
      <hr class="w-25  hr-yellow" />
    </div>
    <Introduction />
    <section-atlas
      :image="require('~/assets/images/lovebird.jpg')"
      title="Peachfaced Lovebirds?"
    >
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae,
          possimus repellendus consequuntur voluptatibus, ea exercitationem
          necessitatibus quisquam aliquam aspernatur provident iste tempore fuga
          minus blanditiis, tempora mollitia et dolore rem. Esse culpa tempora
          voluptas officiis delectus maiores perferendis, suscipit odio quisquam
          saepe enim voluptate et alias, illo cupiditate laborum asperiores nemo
          nulla. Fugiat dolor unde aspernatur voluptas fuga, inventore non
          voluptates ullam enim, itaque corporis labore quo facere quod, autem
          hic optio repellendus ipsum!
        </p>
      </div>
    </section-atlas>
    <h5 class="display-1 text-center mb-5">
      <span class="mr-3">Thanks for coming!</span>
      <g-image
        src="~/assets/images/logo.png"
        width="80"
        height="80"
        class="mt-3 mt-md-0"
        alt="logo"
      />
    </h5>
  </Layout>
</template>

<page-query>
  query {
    posts: allPost (sortBy: "date", order: DESC) {
      edges {
        node {
          path
          id
          title
          content
          category {
            name
            id
          }
          cover {
            large
            thumb
          }
        }
      }
    }
  }
</page-query>

<script>
import Hero from '~/components/mainpage-parts/Hero.vue'
import PostCard from '~/components/post-parts/PostCard.vue'
import Introduction from '~/components/mainpage-parts/Introduction.vue'
import CardDegreeImage from '@rds/card-degree-image'
import SectionAtlas from '@rds/section-atlas'

export default {
  metaInfo: {
    title: 'Home',
    meta: [{ name: 'description', content: 'Welcome to Manguito Blog!' }],
  },
  components: {
    Hero,
    PostCard,
    Introduction,
    'card-degree-image': CardDegreeImage,
    'section-atlas': SectionAtlas,
  },
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    // getHeroImages() {
    //   const posts = this.$page.posts.edges
    //   const heroImages = posts.map((post) => {
    //     return {
    //       url: post.node.cover.large,
    //       id: post.node.id,
    //       title: post.node.title,
    //     }
    //   })
    //   this.heroImages = heroImages
    // },
  },
  mounted() {
    this.posts = this.$page.posts.edges
  },
  computed: {
    getHeroImages() {
      const posts = this.$page.posts.edges
      const heroImages = posts.map((post) => {
        return {
          url: post.node.cover.large,
          id: post.node.id,
          title: post.node.title,
        }
      })
      return heroImages
    },
  },
}
</script>

<style scoped>
.content {
  min-height: 85vh;
}
.hr-yellow {
  border-top: 0.3rem solid;
  color: #ffc627;
}
.display-4 {
  display: inline-block;
  padding: 0 1rem;
  color: #fff;
  background-color: #ffc627;
  margin-top: 1rem;
}

.card-content {
  color: #000;
}

@media (max-width: 576px) {
  .display-1 {
    font-size: 2.7rem;
  }
}
</style>
