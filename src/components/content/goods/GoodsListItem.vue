<template>
  <div class="goods-item" @click="itemclick">
    <div class="goods-list-item">
        <img :src="Showimage" alt="">
        <div class="goods-info">
          <p>{{goodslist.title}}</p>
          <span class="price">{{goodslist.price}}</span>
          <span class="cfav">☆{{goodslist.cfav}}</span>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    methods: {
    },
    props:{
      goodslist:{
        type:Object,
        default:{}
      }
    },
    methods:{
      itemclick(){
        this.$router.push('/detail/' + this.goodslist.iid)
      }
    },
    computed:{
      Showimage(){
        return this.goodslist.image || this.goodslist.show.img
      }
    }
  }
</script>

<style scoped>
.goods-item{
  width: 50%;
}
.goods-list-item{
  width: 100%;
  padding: 5px;
  /* float: left; */
}
.goods-list-item img{
  width:100%;
  border-radius: 5px;
  }
.goods-list-item p {
  width: 100%;
  white-space:nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
  margin-bottom: 3px;
  font-size: 10px;
  margin: 5px 0;
}
.goods-info{
  font-size: 12px;
  bottom: 5px;
  text-align: center;
}
.price{
  color: #ff7b92;
  margin-right: 5px;
}
</style>
