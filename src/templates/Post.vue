<template>
  <Layout>
    <div>
      {{ $page.post.title }}
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
    post (id: $id) {
        title
        content
        date
        id
        cover {
        large
        }
        category {
        name
        id
        }
    }
}
</page-query>

<script>
export default {}
</script>

<style></style>
