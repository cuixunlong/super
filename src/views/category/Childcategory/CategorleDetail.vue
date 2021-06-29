<template>
  <div id="detailitem">
    <div v-for="(item,index) in detailitem" :key="index" class="detailinf">
      <img :src="item.img" alt="">
      <p>{{item.title}}</p>
      <div class="price">
        <span class="itemprice">{{item.price}}元</span>
        <span class="cfav">☆{{item.cfav}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'CategorleDetail',
    props: {
      detailitem: Array,
      default: []
    },
    components: {}
  }
</script>
<style scoped>
  #detailitem {
    overflow: hidden;
  }

  .detailinf {
    width: 50%;
    float: left;
    padding: 10px;
  }

  img {
    width: 100%;
  }

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 5px;
    font-size: 14px;
  }

  .price {
    margin-top: 10px;
    text-align: center;
    font-size: 10px;
  }

  .cfav {
    margin-left: 5px;
  }

  .itemprice {
    color: #ff7b92;
  }
</style>