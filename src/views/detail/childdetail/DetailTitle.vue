<template>
  <div class="sale" v-if="Object.keys(goods).length !== 0">
    <div class="title"><p>{{goods.title}}</p></div>
    <div class="price">
      <p class="newprice">￥{{goods.realPrice}}</p>
      <p class="oldPrice">{{goods.oldPrice}}</p>
      <p class="discount" :style="{background:bgcolor}">{{goods.discount}}</p>
    </div>
    <div class="number">
      <p>{{goods.columns[0]}}</p>
      <p>{{goods.columns[1]}}</p>
      <p >{{goods.services[goods.services.length-1].name}}</p>
    </div>
    <div class="outer">
      <span v-for="(index) in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name:'DetailTitles',
  props:{
    goods:{
      type:Object
    },
    bgcolor:{
      type:String
    }
  },}
</script>
<style>
.title{
  margin-top: 10px;
  font-size: 17px;
}
.price p{
  float: left;
  line-height: 30px;
}
.newprice{
  font-size: 22px;
  color: pink;
}
.oldPrice , .discount{
  font-size: 10px;
  margin-left: 10px;
}
.discount{
  /* background:#f13e3a; */
  color: aliceblue;
  border-radius: 10px;
}
.oldPrice{
    text-decoration: line-through;
}
.price{
  height: 30px;
  margin-top: 10px;
}
.number:nth-child(1){
  text-align: left;
  color: aqua;
}
.number{    
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
}
.number p{
  flex: 1;
  text-align: center;
  font-size: 13px;
}
.outer{
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
}
.outer img{
  width: 15px;  
}
.outer span{
  font-size: 10px;
  flex: 1;
  text-align: center;
}
</style>