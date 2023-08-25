<template>
  <div class="blog-card">
    <div class="card-image">
      <div class="ratio-content">
        <img :src="data.image" :alt="data.title" />
      </div>
    </div>
    <div class="card-content">
      <h2 class="card-title">{{ data.title }}</h2>
      <p class="card-summary">{{ data.summary.substring(0, 100) }}....</p>
      <RouterLink :to="`/blog/${data.id}`" class="read-more"
        >Continue reading</RouterLink
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    data: {
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-card {
  border-radius: 5px;
  margin: 20px 0;
  box-shadow: 0 0 5px rgba(61, 74, 82, 0.3);
  width: 30%;

  @media (max-width: 991px) {
    width: 45%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }

  .card-image {
    position: relative;

    &::before {
      content: "";
      display: block;
      padding-top: 66.34146341463415%;
    }

    .ratio-content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      border-radius: 5px 5px 0 0;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .card-content {
    padding: 0 0 15px 15px;

    .card-title {
      color: #990099;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 7px;
    }

    .card-summary {
      color: #333;
      font-weight: 300;
      margin-top: 0;
    }

    .read-more {
      color: #333;
      font-size: 14px;
      font-weight: 400;
      font-style: italic;
      margin-top: 0;
    }
  }
}
</style>
