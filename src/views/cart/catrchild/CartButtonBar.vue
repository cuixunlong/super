<template>
  <div class="carbuttonbar">
    <div class="all">
      <check-button class="check-box"
      @click.native="allcheck" 
      :isChecked="ischeckall"/>
      <span>全选</span>
    </div>
    <p>合计:{{totalprice}}元</p>
    <button>去结算({{totalength}})</button>
  </div>
</template>
<script>
import CheckButton from './CheckButton.vue'
export default {
  name:'CartButtonBar',
  components:{
    CheckButton,
  },
    computed:{
    getlist(){
      return this.$store.state.countlist
    },
    totalprice(){
      return this.$store.state.countlist.filter(item=>{
        return item.checked
      }).reduce((preValue, item)=>{
        return preValue + item.price * item.count
      },0)
    },
    totalength(){
      return this.$store.state.countlist.filter(item=>item.checked).length
    },
    ischeckall(){
      if(this.$store.state.countlist.length===0) return false

      return !(this.$store.state.countlist.filter(item=>!item.checked).length)
    }
  },
  methods:{
    allcheck(){
      if(this.ischeckall){
        this.getlist.forEach(item=>item.checked=false)
      }else{
        this.getlist.forEach(item=>item.checked=true)
      }
    }
  }
}
</script>
<style scoped>
.all{
  display: flex;
  width: 60px;
  font-size: 13px;
  margin-left: 5px;
}
.carbuttonbar{
  display: flex;
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 49px;
  width: 100%;
  background: #f1ecec;
  border-top: 1px solid #aaa;
}
.carbuttonbar button{
  border: none;
  height: 100%;
  background: #ff6882;
  font-size: 12px;
  width: 90px;
  color: #fff;
  /* margin-left: 100px; */
}
.carbuttonbar p{
  margin-left: 20px;
  flex: 1;
  font-size: 13px;
}
</style>