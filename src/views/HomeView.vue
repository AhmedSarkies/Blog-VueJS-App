<template>
  <div class="home">
    <AppHeader>
      <h1>Blog</h1>
    </AppHeader>
    <div class="container" v-if="blogs">
      <BlogCard v-for="blog in blogs" :key="blog.id" :data="blog" />
    </div>
    <button
      class="load-more-btn"
      @click="loadMore"
      v-if="blogs?.length < totalCount"
    >
      Load More
    </button>
  </div>
</template>

<script>
import { AppHeader, BlogCard } from "@/components";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    AppHeader,
    BlogCard,
  },
  data: () => {
    return {
      blogs: null,
      page: 1,
      totalCount: null,
    };
  },
  mounted: function () {
    this.getBlogs(this.page);
  },
  methods: {
    getBlogs(page) {
      axios
        .get(`http://localhost:3000/blog?_page=${page}&_limit=6`)
        .then((res) => {
          this.blogs = this.blogs ? this.blogs.concat(res.data) : res.data;
          this.totalCount = res.headers["x-total-count"];
        });
    },
    loadMore() {
      this.page++;
      this.getBlogs(this.page);
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 30px 0;
  }
  .load-more-btn {
    color: #fff;
    background-color: #990099;
    border: none;
    border-radius: 5px;
    padding: 5px 15px;
    font-size: 18px;
    line-height: 1;
    margin: 50px 0;
    cursor: pointer;
  }
}
</style>
