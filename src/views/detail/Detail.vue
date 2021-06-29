<template>
  <div id="detail">
   <child-detail class="detail-nav" @titleclick="titleclick" ref="nav"/>
    <scroll class="content"
    ref="scroll"
    @scroll="contentscroll"
    :probeType="3">
      <detail-swiper :topImages="topImages" class="datail-swiper"/>
      <detail-titles :goods="goods" :bgcolor="bgcolor"/>     
      <detail-sale :shop="shop"/> 
      <detail-goods-info :detailInfo="detailInfo"/>
      <detail-info :paramInfo="paramInfo" ref="params"/>
      <comment-info :commentinfo="commentinfo" ref="comment"/>
      <goods-list :goods="recommend" ref="recommend"/>
    </scroll>
    <detail-tab-bar @addclick="addclick"></detail-tab-bar>
  </div>
</template>

<script>
  import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "../../network/detail";

  import ChildDetail from './childdetail/ChildDetail.vue';
  import DetailSwiper from './childdetail/DetailSwiper'
  import DetailTitles from './childdetail/DetailTitle'
  import DetailSale from './childdetail/DetailSale'
  import DetailGoodsInfo from './childdetail/DetailGoodsInfo'
  import DetailInfo from './childdetail/DetailInfo'
  import CommentInfo from './childdetail/CommentInfo'
  import DetailTabBar from './childdetail/DetailTabBar'

  import Scroll from '../../components/common/scroll/Scroll'
  import GoodsList from '../../components/content/goods/GoodsList'



  export default {
    name: "Detail",
    components: {
      ChildDetail,
      DetailSwiper,
      DetailTitles,
      DetailSale,
      Scroll,
      DetailGoodsInfo,
      DetailInfo,
      CommentInfo,
      GoodsList,
      DetailTabBar
      },
    data() {
      return {
        iid: null,
        topImages: [],
        goods:{},
        shop:{},
        detailInfo:{},
        bgcolor:'',
        paramInfo:{},
        commentinfo:{},
        recommend:[],
        itemy:[],
        getitemy:null,
        itemindex:0
      }
    },
    created() {
      // 1.保存传入的iid
      this.iid = this.$route.params.iid

      // 2.根据iid请求详情数据
      getDetail(this.iid).then(res => {
        // 1.获取顶部的图片轮播数据
        // console.log(res);
        const data = res.result
        this.topImages = data.itemInfo.topImages

        this.bgcolor = data.itemInfo.discountBgColor
        //2获取标题数据
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //3获取商家信息
        this.shop = new Shop(data.shopInfo)
        //4获取商品照片
        this.detailInfo = data.detailInfo
        //5获取详情
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        //6获取评论信息
        this.commentinfo = data.rate.list[0]
      })
  
      getRecommend().then(res=>{
        // console.log(res)
        this.recommend = res.data.list
      })
    },
    methods:{      
      titleclick(index){
        this.$refs.scroll.scroll.scrollTo(0 , -this.itemy[index], 300)
        this.itemy=[]
        this.itemy.push(0);
        this.itemy.push(this.$refs.params.$el.offsetTop);
        this.itemy.push(this.$refs.comment.$el.offsetTop);
        this.itemy.push(this.$refs.recommend.$el.offsetTop);
        console.log(this.itemy);
      },
      addclick(){
        const produce = {}
        produce.img = this.topImages[0]
        produce.title = this.goods.title
        produce.desc = this.goods.desc
        produce.price = this.goods.realPrice
        produce.iid = this.iid


        // this.$store.commit('addcart',produce)

        this.$store.commit('addcart',produce)
      },
      contentscroll(position){
        const positiony = -position.y

        let length = this.itemy.length

        for(let i = 0 ; i < length ; i++){
          let iPos = this.itemy[i];

          if((this.itemindex !== i && ((i < (length-1) && positiony >= iPos && positiony < this.itemy[i+1]) || (i === (length-1) && positiony >= iPos))))
            // (i < (length-1) && positiony >= iPos && positiony < this.itemy[i+1]) || (i === (length-1) && positiony >= iPos){
              {
            this.itemindex = i
            console.log(this.itemindex) 
            this.$refs.nav.dataindex = this.itemindex
          }
        }
      }
    },
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background: #fff;
    height: 100vh;
  }
  .detail-nav{
    position: fixed;
    z-index: 10;
    background: #fff;
    width: 100%;
    top: 0;
  }
  .content{
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

</style>
