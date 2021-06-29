<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="detailtext">
      <p>{{detailInfo.desc}}</p>
    </div>
    <div class="detailimg">
      <p>{{detailInfo.detailImage[0].key}}</p>
      <img :src="item" alt="" v-for="(item,index) in detailInfo.detailImage[0].list" :key="index">
    </div>
  </div>
</template>
<script>
export default {
  name:'DetailGoodsInfo',
  props:{
    detailInfo:{
      type:Object
    }
  }
}
</script>
<style>
.detailtext{
  margin: 20px 0;
}
.detailimg img{
width: 100%;
}
.detailimg p{
  text-align: center;
  margin: 10px 0;
}
</style>