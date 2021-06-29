<template>
  <div class="sale">
    <div class="top">
      <img :src="shop.logo" alt="">
      <h2>{{shop.name}}</h2>
    </div>

    <div  class="sale-middle">
      <div class="sale-middle-left">
        <div class="allsale">
          <div>{{shop.sells}}</div>
          <div class="title-middle">总销量</div>
        </div>
        <div class="allgoods">
          <div>{{shop.goodsCount}}</div>
          <div class="title-middle">全部宝贝</div>
        </div>
      </div>
      <div  class="sale-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'DetailSale',
  props:{
    shop:{
      type:Object
    }
  }
}
</script>
<style>
.top{
  display: flex;
  line-height: 70px;
}
.top img{
  width: 70px;
  height: 70px;
  margin-right: 10px;
  border-radius: 50%;
  border: 2px solid burlywood;
  }
  .sale-middle{
    display: flex;
    margin-top: 20px;
  }
  .sale-middle-right{
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-left: 1px solid rgba(0,0,0,.1);
    flex: 1;
  }
  .sale-middle-left{
    flex: 1;
    display: flex;
  }
  .allsale, .allgoods{
    font-size: 20px;
    text-align: center;
    flex: 1;
    margin-top: 20px;
  }
  .allsale{
    margin-right: 10px;
  }
  .title-middle{
    font-size: 15px;
    margin-top: 10px;
  }
  .sale-middle-right td{
    padding: 5px 3px;
    font-size: 13px;
  }
</style>