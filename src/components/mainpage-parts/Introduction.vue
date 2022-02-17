<template>
  <section class="my-5 text-white">
    <div class="intro">
      <svg
        class="intro-svg-top"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 100 5"
        x="0"
        y="0"
      >
        <polygon points="0 0 100 5 0 5" />
      </svg>
    </div>
    <div class="orange-box">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <g-image
              src="~/assets/images/manguito.jpeg"
              class="w-100 shadow rounded my-4"
              alt="manguito"
            />
          </div>
          <div class="col-lg-6 mx-auto">
            <div class="py-4 px-3">
              <h2 class="display-4 mb-4">About Manguito</h2>
              <blockquote class="blockquote mb-4 text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, saepe. Facilis, sapiente ex aliquid, molestiae
                dolores voluptatem obcaecati deserunt iusto accusamus,
                reprehenderit culpa ipsum vitae modi fuga distinctio provident
                quibusdam repellendus perspiciatis deleniti sunt ducimus
                repellat tempore. Officiis praesentium temporibus eius, quis
                quisquam est vitae maiores magni doloribus, esse quia inventore.
                A esse recusandae excepturi incidunt adipisci odio quis vero et
                doloribus. At, odit officiis? Temporibus exercitationem nam
                pariatur omnis error nemo velit amet ex neque eum. Sit, corrupti
                laudantium?
              </blockquote>
              <hr class="w-50 hr-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="intro">
      <svg
        class="intro-svg-bottom"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 100 5"
        x="0"
        y="0"
      >
        <polygon points="0 0 100 0 0 5" />
      </svg>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.intro {
  position: relative;
  top: auto;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  overflow: hidden;
  pointer-events: none;
  height: 80px;
}

.intro-svg-top {
  position: absolute;
  bottom: 0;
  overflow: hidden;
}

.intro-svg-bottom {
  position: absolute;
  top: 0;
  overflow: hidden;
}

.intro-svg-top polygon,
.intro-svg-bottom polygon {
  color: #ffc627;
  fill: currentColor;
}

.orange-box {
  background-color: #ffc627;
}
.hr-white {
  border-top: 0.6rem solid;
  color: #fff;
}
.display-4 {
  text-decoration: underline;
}

.display-4 {
  display: inline-block;
  padding: 0 1rem;
  transition: 0.4s;
  transition-timing-function: ease-out;
  margin-top: 1rem;
}
.display-4:hover {
  color: #ffc627;
  background-color: #fff;
  transition: 0.4s;
  transition-timing-function: ease-out;
}

@media (max-width: 576px) {
  .display-4 {
    font-size: 2.4rem;
  }
}
</style>
