<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" :key="index" :class="{active:index===itemindex}"
      @click="itemclick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TabControl',
    props: {
      titles: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        itemindex: 0
      }
    },
    methods: {
      itemclick(index) {
        this.itemindex = index
        this.$emit('tabClick', index);

      }
    }
  }
</script>
<style>
  .tab-control {
    text-align: center;
    display: flex;
    height: 44px;
    line-height: 44px;
    background: #fff;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: #ff97a9;
  }

  .active span {
    border-bottom: 2px solid #ff97a9;
  }
</style>