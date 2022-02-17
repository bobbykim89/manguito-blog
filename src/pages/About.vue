<template>
  <Layout>
    <div class="py-5 text-white content-area overflow-hidden">
      <div class="row mt-5">
        <div class="col-md-6">
          <!-- Left -->
          <div class="d-flex my-3 my-md-5">
            <g-image
              src="~/assets/images/about.jpeg"
              alt="about-image"
              class="w-50 w-md-75 mx-auto border border-4 border-white rounded-circle shadow-lg align-self-center"
            />
          </div>
        </div>
        <div class="col-md-6">
          <!-- Right -->
          <div
            class="d-flex flex-column my-3 my-md-5 pt-md-5 justify-content-center"
          >
            <h2 class="display-4 mx-auto">About Manguito Blog</h2>
            <div class="mb-3 mx-auto mx-md-2">
              <p>Static Blog for Manguito</p>
              <p>Version: 0.1.0</p>
              <p>Made by: Bobby Kim</p>
            </div>
            <div class="d-flex mx-auto">
              <li>
                <a
                  href="https://github.com/bobbykim89"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-github-square" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/bobby-kim-9baa17165/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:bobby.sihun.kim@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fas fa-envelope-square" />
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About',
  },
}
</script>

<style scoped>
.content-area {
  background-color: #ffc107;
  min-height: 85vh;
}
.border-4 {
  border-width: 4px !important;
}
p {
  font-size: 1.2rem;
  margin-bottom: 0;
}
li {
  list-style-type: none;
  margin-right: 1rem;
}
a {
  text-decoration: none;
  color: #fff;
  font-size: 3rem;
}
a:hover {
  color: rgb(241 245 249);
}
@media (max-width: 767px) {
  .display-4 {
    font-size: 2.5rem !important;
  }
}
</style>
