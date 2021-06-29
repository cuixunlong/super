<template>
  <div class="detail-swiper">
    <swiper class="swiper-list">
      <swiper-item v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import {Swiper, SwiperItem} from '../../../components/common/swiper'
export default {
  name:"Detail-Swiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topImages:{
      type:Array,
    }
  }
}
</script>
<style>
.swiper-list{
  height: 300px;
}
</style>