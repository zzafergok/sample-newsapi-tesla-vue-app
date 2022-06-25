<template>
  <div>
    <Navbar :detail="detail" @searchArray="handleSearch" />
    <Category />
    <ListItem
      :item="tesla"
      :searchedArray="searchedArray"
      :storageTesla="storageTesla"
      @clicked="handleClick"
    />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Category from "../components/Category.vue";
import ListItem from "../components/ListItem.vue";
import Footer from "../components/Footer.vue";
import { mapState } from "vuex";
export default {
  name: "categories-page",
  components: {
    /* eslint-disable */
    Navbar,
    Category,
    /* eslint-disable */
    ListItem,
    Footer,
  },
  data: function () {
    return {
      detail: {},
      searchedArray: [],
      storageTesla: [],
    };
  },
  mounted: function () {
    this.$store.dispatch("fetchTesla");
    this.detail = JSON.parse(localStorage.getItem("detail"));
    let storageTeslaItem = JSON.parse(localStorage.getItem("teslaItem"));
    if (storageTeslaItem) {
      this.storageTesla = storageTeslaItem;
    }

    //remove localstorage
    localStorage.removeItem("detail");
    localStorage.removeItem("searchDetail");
  },

  computed: {
    ...mapState(["tesla"]),
  },
  methods: {
    handleClick(item, newUrl) {
      /* eslint-disable */
      this.tesla.length > 0 &&
        this.tesla.filter((element) => {
          let elementSplitUrl = element.title.toLowerCase();
          elementSplitUrl = elementSplitUrl.replace(
            /[.,\/#!$%\^&\*;:{}=\-_`~()]/g,
            ""
          );
          let elementNewUrl = elementSplitUrl.replace(/\s/g, "-");

          if (elementNewUrl === newUrl) {
            let newDetail = {
              idTitle: elementNewUrl,
              title: element.title,
              content: element.content,
              image: element.urlToImage,
              author: element.author,
              date: element.publishedAt.slice(0, -10),
              time: element.publishedAt.slice(11, -1),
            };

            localStorage.setItem("detail", JSON.stringify(newDetail));
          }

          //seen
          if (element.description === item.description) {
            let newDetail = {
              author: item.author,
              content: item.content,
              description: item.description,
              publishedAt: item.publishedAt,
              title: item.title,
              url: item.url,
              urlToImage: item.urlToImage,
              isSeen: true,
            };

            const newArr = [...this.storageTesla, newDetail];

            const uniqueIds = [];

            const uniqueTeslaItem = newArr.filter((elements) => {
              const isDuplicate = uniqueIds.includes(elements.title);

              if (!isDuplicate) {
                uniqueIds.push(elements.title);
                return true;
              }
              return false;
            });

            localStorage.setItem("teslaItem", JSON.stringify(uniqueTeslaItem));
          }

          window.location.href = `/${newUrl}`;
        });

      this.searchedArray.length > 0 &&
        this.searchedArray?.filter((element) => {
          let elementSplitUrl = element.title.toLowerCase();
          elementSplitUrl = elementSplitUrl.replace(
            /[.,\/#!$%\^&\*;:{}=\-_`~()]/g,
            ""
          );
          let elementNewUrl = elementSplitUrl.replace(/\s/g, "-");

          if (elementNewUrl === newUrl) {
            let newDetail = {
              idTitle: elementNewUrl,
              title: element.title,
              content: element.content,
              image: element.urlToImage,
              author: element.author,
              date: element.publishedAt.slice(0, -10),
              time: element.publishedAt.slice(11, -1),
              isRead: true,
            };
            localStorage.setItem("searchDetail", JSON.stringify(newDetail));
          }
          window.location.href = `/${newUrl}`;
        });
    },
    handleSearch(searchArray) {
      this.searchedArray = searchArray;
    },
  },
};
</script>
