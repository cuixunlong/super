<template>
<div id="cart">
  <nav-bar class="nav-bar"><div slot="center">购物车({{$store.state.countlist.length}})</div></nav-bar>
  <cart-list class="car-list"/>
  <cart-button-bar/>
</div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'

import CartList from './catrchild/CartList'
import CartButtonBar from './catrchild/CartButtonBar.vue'
  export default {
    name: "Cart",
    components:{
      NavBar,
      CartList,
      CartButtonBar
    }
  }
</script>

<style scoped>
#cart{
  margin-bottom: 79px;
}
.nav-bar{
  background: #ff7b92;
  color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;
}
</style>
