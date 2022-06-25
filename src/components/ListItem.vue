<template>
  <div class="container container-list-item">
    <div class="row" v-if="searchedArray.length > 0">
      <Item
        v-for="(searchItem, index) in searchedArray"
        :key="index"
        :item="searchItem"
        :storageTesla="storageTesla"
        @clicked="handleClick"
      />
    </div>
    <div class="row" v-else>
      <Item
        v-for="(teslasItem, index) in item"
        :key="index"
        :item="teslasItem"
        :storageTesla="storageTesla"
        @clicked="handleClick"
      />
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "list-item",
  props: {
    item: Array,
    searchedArray: Array,
    storageTesla: Array,
  },
  components: {
    Item,
  },
  methods: {
    handleClick(item, newUrl) {
      this.$emit("clicked", item, newUrl);
    },
  },
};
</script>
<style lang="scss" scope>
.container-list-item {
  display: flex !important;
  flex-wrap: wrap !important;
  justify-content: center !important;
  max-width: 1200px !important;
  margin-block: 2rem !important;
  gap: 2rem !important;
  min-height: 90vh !important;
  margin-top: 0px !important;

  .row {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
}
</style>
