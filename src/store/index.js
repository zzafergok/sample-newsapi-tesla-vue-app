import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tesla: [],
  },
  getters: {
    getTesla(state) {
      return state.tesla;
    },
  },
  mutations: {
    setTesla(state, data) {
      state.tesla = data;
    },
  },
  actions: {
    async fetchTesla({ commit }) {
      let categoryItem = JSON.parse(localStorage.getItem("category"));

      if (categoryItem) {
        const catItem = await axios.get(
          `https://newsapi.org/v2/top-headlines?category=${categoryItem}&sortBy=publishedAt&pageSize=100&language=en&apiKey=9b34e6ce8c714537b095f4143ddf77ef`
        );
        commit("setTesla", catItem.data.articles);
      } else {
        const teslas = await axios.get(
          "https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=9b34e6ce8c714537b095f4143ddf77ef"
        );
        commit("setTesla", teslas.data.articles);
      }
    },
  },
});
