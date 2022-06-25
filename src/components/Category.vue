<template>
  <div class="container">
    <div class="row all-categories">
      <div class="col-12 all-categories-button">
        <button @click="goToHomePage">
          {{ teslaText }}
        </button>
      </div>

      <div
        v-for="(category, index) in allCategory"
        :key="index"
        class="all-categories-button"
      >
        <button @click="handleClick(category)">
          {{ capitalizeFirstLetter(category) }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "category-page",
  data: function () {
    return {
      allCategory: [
        "business",
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology",
      ],
      teslaText: "Tesla",
    };
  },
  methods: {
    capitalizeFirstLetter: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    handleClick: function (item) {
      localStorage.setItem("category", JSON.stringify(item));
      window.location.href = `/${item}`;
    },
    goToHomePage: function () {
      localStorage.removeItem("category");
      window.location.href = "/";
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  .all-categories {
    display: flex !important;
    justify-content: center !important;
    margin-top: 4rem !important;
    @media (min-width: 320px) and (max-width: 550px) {
      margin-top: 8rem !important;
    }

    &-button {
      display: contents;
      button {
        margin: 0.5rem;
        padding: 0.5rem;
        font-size: 16px;
        font-weight: bold;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        background: transparent;
        font-family: "Rokkitt", serif;

        &:hover {
          background: #3755a0;
          border-color: #3755a0;
          color: #f2f2f2;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
