<template>
  <Layout>
    <div class="text-light py-5 content-area overflow-hidden">
      <div class="d-flex mt-5 flex-column justify-content-center text-center">
        <g-image
          src="~/assets/images/logo.png"
          alt="logo"
          class="mx-auto mb-4"
        />
        <h1>Woops!</h1>
        <h3 class="mb-5">This page does not exist!</h3>
        <b-button class="button" variant="danger">
          <a href="/">Go Back</a>
        </b-button>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Manguito Blog - 404 Page Not Found',
    meta: [
      { name: 'description', content: 'Oops I think something went wrong!' },
    ],
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
.content-area {
  background-color: #ffc107;
  min-height: 85vh;
  font-family: 'Permanent Marker', cursive;
}
a {
  color: #fff;
}
a:hover {
  color: #fff;
  text-decoration: none;
}
img {
  width: 15rem;
}
.button {
  width: 6rem;
  margin: 0 auto;
}
</style>
