<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodslist="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props:{
      goods:{
        type:Array,
        default:[]
      }
    }
  }
</script>

<style scoped>
.goods{
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 49px;
}
</style>
