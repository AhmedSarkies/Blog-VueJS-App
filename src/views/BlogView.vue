<template>
  <div class="blog" v-if="blog">
    <AppHeader>
      <RouterLink to="/" class="back-btn">Back</RouterLink>
      <h1>
        {{ blog?.title }}
      </h1>
    </AppHeader>
    <div class="blog-container">
      <div class="blog-image">
        <div class="ratio-content">
          <img :src="blog?.image" :alt="blog?.title" />
        </div>
      </div>
      <h2 class="blog-title">{{ blog?.title }}</h2>
      <p class="blog-content">{{ blog?.content }}</p>
    </div>
  </div>
</template>

<script>
import { AppHeader } from "@/components";
import axios from "axios";

export default {
  name: "BlogView",
  components: {
    AppHeader,
  },
  data: () => {
    return {
      blog: null,
    };
  },
  mounted: function () {
    axios
      .get(`http://localhost:3000/blog/${this.$route.params.id}`)
      .then((res) => {
        this.blog = res.data;
      });
  },
};
</script>

<style lang="scss" scoped>
.blog-container {
  width: 75%;
  margin: 0 auto 100px auto;
  color: #333;

  .blog-image {
    position: relative;
    margin-top: 50px;

    &::before {
      content: "";
      display: block;
      padding-top: 30%;
    }

    .ratio-content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .blog-title {
    color: #990099;
  }

  .blog-content {
    color: #545454;
    font-style: italic;
  }
}
</style>
