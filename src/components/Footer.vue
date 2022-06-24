<template>
  <div class="footer">
    <div class="footer-content">
      <p>You can access the source codes of this website on</p>
      <a href="https://github.com/zzafergok/sample-newsapi-tesla-react-app">
        <img src="../assets/github.svg" alt="github" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  height: 21vh;
  background-color: #18181bed;
  /* border-top: 1px dashed #f2f2f2; */
  display: flex;
  align-items: center;
  justify-content: center;

  .footer-content {
    display: flex;
    align-items: center;
    p {
      color: #99a1aa;
    }
  }

  .footer-content img {
    cursor: pointer;
    margin-left: 0.5rem;
    height: 24px;
    width: 24px;
  }
}
</style>
