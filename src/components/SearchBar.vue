<template>
  <div>
    <input
      class="search-bar"
      type="search"
      v-model="search"
      v-on:keyup.enter="onEnter"
      :placeholder="search.length > 0 ? '' : 'Please enter at least one word'"
    />
    <button @click="handleClick">Search</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SearchBar",
  data() {
    return {
      search: "",
      error: false,
      looading: false,
      searchArray: [],
    };
  },
  methods: {
    async handleClick() {
      if (this.search.length !== 0) {
        this.looading = true;
        const url = `https://newsapi.org/v2/everything?q=${this.search}&sortBy=publishedAt&apiKey=9b34e6ce8c714537b095f4143ddf77ef`;
        const data = await axios.get(url);
        this.searchArray = data.data.articles;
        this.looading = false;
        this.search = "";
        this.error = false;
        this.$emit("searchArray", this.searchArray);
      } else {
        this.error = true;
      }
    },
    onEnter: function () {
      return this.handleClick();
    },
  },
};
</script>

<style lang="scss" scoped>
input[type="search"]::-webkit-search-cancel-button {
  display: none;
}

div {
  display: flex;
  .search-bar {
    border: none;
    outline: none;
    border-radius: 5px;
    background: #f2f2f2;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: #000;
    width: 70%;
    margin-right: 0.5rem;
    &:focus {
      background: #3755a0;
      color: #f2f2f2;
    }
  }

  .search-button {
    padding: 0.5rem;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    background: transparent;
    background: #3755a0;
    border-color: #3755a0;
    color: #f2f2f2;
    cursor: pointer;
  }

  .search-button-word {
    background: #3755a0cc !important;
    border-color: #3755a0cc !important;
    color: #e6e5e5 !important;
  }
}
</style>
