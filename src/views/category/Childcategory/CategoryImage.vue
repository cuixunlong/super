<template>
  <div>
    <!-- <goods-list :goods="rightitem" ref="recommend"/> -->
    <div v-for="(item, index) in rightitem" :key="index" class="ulitem">
      <!-- <li>{{ item }}</li> -->
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <p>{{item.title}}</p>
      </a> </div>
  </div>
</template>
<script>
  import GoodsList from "../../../components/content/goods/GoodsList";

  export default {
    name: "CategoryImage",
    components: {
      GoodsList,
    },
    props: {
      rightitem: {
        type: Array,
        default: [],
      },
    },
  };
</script>
<style scoped>
  .ulitem {
    text-align: center;
    font-size: 10px;
    width: 33%;
  }

  .ulitem img {
    width: 100%;
    padding: 10px 15px;
  }
</style>