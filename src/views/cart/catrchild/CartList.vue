<template>
  <div class="cart-list">
    <div v-for="(item,index) in getlist" :key="index" class="cart-list-item">
      <check-button :isChecked="item.checked" @click.native="checkclick(index)"/>
      <div class="imglist">
        <img :src="item.img" alt="">
      </div>
      <div class="text">
        <p class="title">{{item.title}}</p> 
        <p class="desc">{{item.desc}}</p>
        <div class="pricecount">
        <p class="price">{{item.price}}￥</p>
        <p class="count">x{{item.count}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CheckButton from './CheckButton.vue'

export default {
  name:'CartList',
  components:{
    CheckButton
  },
  computed:{
    getlist(){
      return this.$store.state.countlist
    }
  },
  methods:{
    checkclick(index){
      this.getlist[index].checked=! this.getlist[index].checked
    }
  }
}
</script>
<style scoped>

.cart-list{
  width: 100%;
  padding: 10px;
  height: 100%;
  position: relative;
  margin-top: 44px;
}
.cart-list-item{
  width: 100%;
  display: flex;
  /* padding: 5px; */  border-bottom: 1px solid #aaaaaa8a;
  margin-top: 10px;

}
.cart-list-item .imglist img{
  /* width: 60px; */
  height: 80px;
}
.text{
  width: 100%;
  overflow: hidden;
  margin-left: 10px;
}
.text p{
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
}
.title{
  margin: 0;
  font-size: 16px;
}
.desc{
  font-size: 13px;
  margin-top: 15px;
}
.price{
  font-size: 18px;
  color: #ff6882;
  margin-top: 10px;
  flex: 1;
}
.pricecount{
  display: flex;
}
.count{
  margin-top: 10px;
}
</style>