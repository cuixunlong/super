<template>
  <div class="childdetail">
    <nav-bar>
      <div slot="left" class="left" @click="backclick">
        <img src="../../../assets/img/common/返回.png" alt="">
        </div>
      <div slot="center" class="center">
        <div 
            class="center-item"  :class="{active: index ===dataindex}" @click="itemclick(index)"
            v-for="(item,index) in titles" :key="index">
        {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from '../../../components/common/navbar/NavBar'

export default ({
  
  name:'ChildDetail',
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      dataindex:0
    }
  },
  components:{
    NavBar
  },
  methods:{
    itemclick(index){
      this.dataindex = index
      this.$emit('titleclick',index)
    },
    backclick(){
      this.$router.back()
    }
  }
})
</script>
<style scoped>
.center{
  display: flex;
}
.center-item{
  flex: 1;
  font-size: 13px;
}
img{
  width: 27px;
  height: 27px;
}
.active{
  color: #ff7b92;
}
.left{
  margin-top: 7px;
}
</style>
