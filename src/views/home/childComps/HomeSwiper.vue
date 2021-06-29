<template>
  <div>
    <swiper>
    <swiper-item v-for="(item ,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageload">
      </a>
    </swiper-item>
  </swiper>
  </div>
</template>
<script>
import{Swiper,SwiperItem} from '../../../components/common/swiper'

export default {
  name:'HomeSwiper',
  data(){
    return{
      isload:false
    }
  },
  props:{
    banners:{
      type:Array,
      default(){
        return{}
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    imageload(){
      if(!this.isload){
      this.$emit('swiperimageload')
      this.isload = true
      }
    }
  }
}
</script>