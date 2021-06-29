<template>
  <div id="home">
    <nav-bar class="home-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="titles" class="tab-controla" @tabClick="tabClick" ref="tabControla" v-show="isTabFixed">
    </tab-control>
    <scroll class="content" ref="scroll" :probeType="3" :pull-up-load="true" @scroll="contentscroll"
      @pullingUp="loadMore">
      <home-swiper class="home-swiper" :banners="banners" @swiperimageload.once="swiperimageload" />
      <home-recommend-view :recommends='recommends' />
      <feature-view></feature-view>
      <tab-control :titles="titles" class="tab-control" @tabClick="tabClick" ref="tabControlb">
      </tab-control>
      <good-list :goods="goods[currentType].list"></good-list>
    </scroll>
    <back-top class="backtop" @click.native="backtop" v-show="contentshow">
      <img src="../../assets/img/common/top.png" alt="">
    </back-top>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommendView from './childComps/HomeRecommendView'
  import FeatureView from './childComps/FeatureView'

  import GoodList from '../../components/content/goods/GoodsList'
  import NavBar from '../../components/common/navbar/NavBar'
  import TabControl from '../../components/content/tabControl/TabControl'
  import Scroll from '../../components/common/scroll/Scroll.vue'
  import BackTop from '../../components/content/backTop/BackTop.vue'

  import {
    getHomeData,
    getHomeMUltidata
  } from '../../network/home'
  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      TabControl,
      HomeRecommendView,
      FeatureView,
      GoodList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        titles: ['流行', '新款', '精选'],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          }
        },
        currentType: 'pop',
        contentshow: false,
        tabOffsetTop: 0,
        isTabFixed: false
      }
    },
    destroyed() {},
    created() {
      this.getHomeMUltidata(),
        this.getHomeData('pop')
      this.getHomeData('new')
      this.getHomeData('sell')
    },
    methods: {
      // 事件监听相关方法

      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControla.itemindex = index
        this.$refs.tabControlb.itemindex = index
      },
      //返回顶部
      backtop() {
        this.$refs.scroll.scroll.scrollTo(0, 0, 500)
      },
      //返回顶部按钮隐藏
      contentscroll(position) {
        this.contentshow = position.y < -1000

        this.isTabFixed = (-position.y) > this.tabOffsetTop + 45

        // console.log(this.isTabFixed)
      },
      //上拉加载更多
      loadMore() {
        this.getHomeData(this.currentType)

        this.$refs.scroll.scroll.refresh()
      },

      swiperimageload() {
        this.tabOffsetTop = this.$refs.tabControlb.$el.offsetTop
        // console.log(this.$refs.tabControlb.$el.offsetTop)
      },
      //  网络请求相关方法

      getHomeMUltidata() {
        getHomeMUltidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list
        })
      },
      getHomeData(type) {
        const page = this.goods[type].page + 1
        getHomeData(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
  }

  .home-bar {
    background-color: #ff7b92;
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .home-swiper {
    margin-top: 44px;
  }

  .content {
    /* margin-top: 44px; */
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .backtop {
    position: fixed;
    right: 10px;
    bottom: 60px;
  }

  .tab-controla {
    position: relative;
    z-index: 9;
    margin-top: 44px;
  }
</style>