<template>
  <div v-if="Object.keys(commentinfo).length !== 0">
    <div class="title">
      <span>用户评论</span>
      <span class="more">更多</span>
    </div>
    <div class="user">
      <img :src="commentinfo.user.avatar" alt="">
      <span>{{commentinfo.user.uname}}</span>
    </div>
    <div class="content">
      <p>{{commentinfo.content}}</p>
      <div class="size">
        <span>{{commentinfo.created}}</span>
        <span>{{commentinfo.style}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'CommentInfo',
  props:{
    commentinfo:{
      type:Object
    }
  },
  }
</script>
<style scoped>
.title{
  height: 50px;
  font-size: 15px;
  line-height: 50px;
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.more{
  float: right;
}
.user{
  margin-top: 10px;
  height: 70px;
}
.user img{
  width: 70px;
  border-radius: 50%;
}
.user span{
  position: relative;
  top: -50%;
  margin-left: 20px;
  font-size: 15px;
}
.content{
  margin-top: 15px;
}
.content p{
  font-size: 15px;
}
.size{
  margin-top: 10px;
}
.size span{
  font-size: 10px;
}
</style>