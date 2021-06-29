<template>
    <div class="tab-bar-item" @click="itemclick">
      <div v-if="!isactive">
        <slot name="item-img" ></slot>
        </div>
      <div v-else>
        <slot name="item-img-active"></slot>
        </div>
      <div :style="activestyle">
        <slot name="item-text"></slot>
        </div>
  </div>
</template>

<script>
export default {
  name: 'TabBaritem', 
  props:{
    path:String,
    activeColors:{
      type:String,
      default:'red'
    }
  },
  data(){
    return{
    }
  },
  methods:{
    itemclick(){
      this.$router.push(this.path)
    }
  },
  computed:{
  isactive(){
    return this.$route.path.indexOf(this.path) !== -1
  },
  activestyle(){
    return this.isactive ? {color:this.activeColors}:{}
  }
  
  }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  height: 49px;
  text-align: center;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
}
</style>