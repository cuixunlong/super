<template>
  <div class="bottom-bar">
    <div>
      <img src="../../../assets/img/common/客服.png" alt="">
      <p>客服</p>
    </div>
    <div>
      <img src="../../../assets/img/common/店铺.png" alt="">
      <p>店铺</p>
    </div>
    <div>
      <img src="../../../assets/img/common/收 藏.png" alt="">
      <p>收藏</p>
    </div>
    <div class="add" @click="addclick">
      <p>加入购物车</p>
    </div>
    <div class="buy">
      <p>购买</p>
    </div>
  </div>
</template>
<script>
export default {
  name:'DetailTabBar',
  methods:{
    addclick(){
      this.$emit('addclick')
    }
  }
}
</script>
<style scoped>
.bottom-bar{
  height: 49px;
  background: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
}
div{
  flex: 1;
  text-align: center;
  font-size: 15px;
}
.bottom-bar img{
  width: 25px;
}
.add{
  background: yellow;
  height: 100%;
  display: flex;
      word-break: keep-all;
}
.add p{
  margin: auto;
}
.buy{
  background: pink;
  display: flex;
}
.buy p{
  margin: auto;
  color: #fff;
}
</style>