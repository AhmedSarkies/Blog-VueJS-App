<template>
  <header>
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  background-image: url(@/assets/header-bg.jpg);
  background-size: cover;

  &::before {
    content: "";
    background: linear-gradient(to right, #330033, #333366);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.95;
  }

  h1 {
    position: relative;
    color: #fff;
    font-size: 60px;
    font-weight: 300;
  }

  .back-btn {
    color: #fff;
    text-decoration: none;
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    padding: 7px 15px;
    line-height: 1;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
