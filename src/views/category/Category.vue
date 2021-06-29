<template>
  <div id="category">
    <!-- 顶部 -->
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <!-- 中间滚动部分 -->
    <div class="middle">
      <!-- 左边分类 -->
      <div>
        <categoryleft-list :listitem="lefttitle" class="lefttitle" @selectItem="selectItem"></categoryleft-list>
      </div>
      <!-- 右边分类 -->
      <scroll class="content" ref="scroll" @scroll="contentscroll" @pullingUp="contentmore" :probeType="3"
        :pull-up-load="true">
        <div>
          <category-image :rightitem=" rightimage" class="rightimage" />

          <!-- 选项 -->
          <tab-control :titles="title" class="control" />

          <!-- 详情 -->
          <categorle-detail :detailitem="detailinf" />
        </div>
      </scroll>
    </div>
    <back-top class="backtop" @click.native="backtop" v-show="topshow">
      <img src="../../assets/img/common/top.png" alt="">
    </back-top>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import Scroll from "../../components/common/scroll/Scroll";
  import TabControl from '../../components/content/tabControl/TabControl.vue'
  import BackTop from '../../components/content/backTop/BackTop.vue'

  import CategoryleftList from "./Childcategory/CategorleftyList.vue";
  import CategoryImage from "./Childcategory/CategoryImage.vue";
  import CategorleDetail from './Childcategory/CategorleDetail.vue'

  import {
    getCategory,
    getSubcategory,
    getCategoryDetail
  } from "../../network/category";
  export default {
    name: "Category",
    components: {
      NavBar,
      Scroll,
      CategoryleftList,
      CategoryImage,
      CategorleDetail,
      TabControl,
      BackTop
    },
    data() {
      return {
        lefttitle: [],
        rightimage: [],
        currentIndex: 0,
        miniWallkey: [],
        detailinf: [],
        iindex: [],
        topshow: false,
        title: ['综合', '新品', '销量']
      };
    },
    created() {
      // 1.请求分类数据
      this._getCategory();
    },
    methods: {
      _getCategory() {
        getCategory().then((res) => {
          // 1.获取分类数据
          this.lefttitle = res.data.category.list;
          // 2.初始化每个类别的子数据
          for (
            let i = 0; i < this.lefttitle.length; i++
          ) {
            this.miniWallkey = this.lefttitle[i].miniWallkey;
          }
          // 3.请求第一个分类的数据
          this._getSubcategories(0);
          this._getCategoryDetail(0)
        });
      },
      _getSubcategories(index) {
        this.currentIndex = index
        const mailKey = this.lefttitle[index].maitKey;
        getSubcategory(mailKey).then((res) => {
          this.rightimage = res.data.list;
        });
      },
      _getCategoryDetail(type) {
        // 1.获取请求的miniWallkey

        const miniWallkey = this.lefttitle[this.currentIndex].miniWallkey
        getCategoryDetail(miniWallkey).then(res => {
          this.detailinf = res
          console.log(res);
        })
      },


      selectItem(index) {
        this._getSubcategories(index)
        this._getCategoryDetail(index)
      },
      //返回顶部
      backtop() {
        this.$refs.scroll.scroll.scrollTo(0, 0, 500)
      },
      //返回顶部的隐藏与显示
      contentscroll(position) {
        this.topshow = (-position.y) > 1000
      },
      contentmore() {
        this.$refs.scroll.scroll.refresh()
      }
    },
  };
</script>

<style scoped>
  #category {
    height: 100vh;
  }

  .nav-bar {
    background: #ff7b92;
    color: #fff;
  }

  .middle {
    display: flex;
    height: 100%;
  }

  .content {
    position: absolute;
    left: 100px;
    right: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;

    flex: 1;
  }

  .lefttitle {
    text-align: center;
    width: 100px;
  }

  .rightimage {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0 0 10px;
  }

  .backtop {
    position: absolute;
    bottom: 60px;
    right: 20px;
  }
</style>