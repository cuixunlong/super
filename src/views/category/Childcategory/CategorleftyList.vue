<template>
  <div class="leftlistitem">
    <scroll class="leftcontent" @scroll="contentscroll">
      <div v-for="(item, index) in listitem" :key="index" class="ullist" @click="listclick(index)"
        :class="{change:listindex === index}">{{ item.title}}
      </div>
    </scroll>
  </div>
</template>
<script>
  import Scroll from '../../../components/common/scroll/Scroll.vue';
  export default {
    components: {
      Scroll
    },
    name: "CategoryleftList",
    props: {
      listitem: {
        type: Array,
        default: [],
      },
    },
    components: {
      Scroll
    },
    data() {
      return {
        listindex: 0
      };
    },
    methods: {
      listclick(index) {
        this.listindex = index
        this.$emit('selectItem', index);
      },
      contentscroll(position) {
        console.log(position)
      }
    }
  };
</script>
<style>
  .ullist {
    width: 100%;
    text-align: center;
    line-height: 50px;
    background: #66666612;
    font-size: 13px;
  }

  .leftcontent {
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
    width: 100px;
  }

  .change {
    color: #ff5777;
    background: white;
    border-left: 2px solid #ff5777;
  }
</style>