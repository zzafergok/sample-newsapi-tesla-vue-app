<template>
  <div class="col-md-3 col-sm-4 col-8 card-wrapper">
    <div class="card">
      <div>
        <div class="card-header">
          <img
            :src="item.urlToImage"
            :alt="item.title"
            class="card-header-image"
          />
        </div>
        <div class="card-body">
          <h4 class="card-body-title">{{ item.title }}</h4>
          <p class="card-body-text">{{ item.description }}</p>
        </div>
      </div>
      <div class="card-footer between">
        <a @click="handleClick(item)" class="card-footer-readMore">
          Read More
        </a>

        <!-- {teslaItem.map((tItem, index) => {
            if (tItem.title === item.title) {
              return (
                <div class="card-footer-left" key={index}>
                  <span>Seen</span>
                  <AiFillEye />
                </div>
              );
            }
          })} -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: "Item",
  props: {
    item: Object,
  },
  methods: {
    handleClick(item) {
      let splitUrl = item && item.title && item.title.toLowerCase();
      splitUrl =
        splitUrl && splitUrl.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      let newUrl = splitUrl && splitUrl.replace(/\s/g, "-");
      this.$emit("clicked", item, newUrl);
    },
  },
};
</script>

<style lang="scss" scope>
img {
  max-width: 100%;
  display: block;
  object-fit: cover;
}

.card-wrapper {
  display: flex;
  overflow: hidden;
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  background: #ece9e6;
  background: linear-gradient(to right, #ffffff, #ece9e6);
  margin: 1rem;
  padding-left: 0;
  padding-right: 0;
  height: 500px;
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: inherit;
    &-header {
      height: 175px;
      &-image {
        width: 100%;
        height: 160px;
        object-fit: fill;
        border-radius: 1em 1em 0 0;
      }
    }

    &-loading {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-body {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      overflow: hidden;
      white-space: normal;
      height: 285px;
      h4 {
        font-size: 0.9rem;
        text-transform: capitalize;
      }
    }

    &-footer {
      display: flex;
      margin-left: 1rem;
      margin-right: 1rem;
      margin-top: 1rem;
      height: 100%;

      &-left {
        display: flex;
        align-items: flex-start;

        svg {
          margin-left: 0.5rem;
        }
      }
      &-readMore {
        cursor: pointer;
        align-items: center;
      }
    }
  }
}

.between {
  justify-content: space-between;
  align-items: flex-start;
}
</style>
