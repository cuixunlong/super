<template>
  <div class="check-button" >
    <img src="../../../assets/img/cart/tick.svg" alt="" :class="{check:isChecked}">
  </div>
</template>
<script>
export default {
  name:'CheckButton',
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  },
}
</script>
<style>
.check-button{
  display: flex;
  margin-right: 5px;
}
.check-button img{
  height: 18px;
  margin: auto 0;
  border-radius: 50%;
  border: 2px solid #aaa;
}
.check{
  background: #ff6882;
  border: none !important ;
}

</style>