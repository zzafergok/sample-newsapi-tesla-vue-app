<template>
  <div>
    <list-item :item="tesla" @clicked="handleClick" />
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import { mapState } from "vuex";
export default {
  name: "home-page",
  components: {
    ListItem,
  },
  mounted() {
    this.$store.dispatch("fetchTesla");
  },
  computed: {
    ...mapState(["tesla"]),
  },
  methods: {
    handleClick(item, newUrl) {
      console.log("bu item a tıkladım:", item, "newUrl = ", newUrl);
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
              isRead: true,
            };

            localStorage.setItem("detail", JSON.stringify(newDetail));
          }

          window.location.href = `/${newUrl}`;
        });
    },
  },
};
</script>
