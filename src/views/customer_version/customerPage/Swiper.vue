<template>
  <div class="swiper">
    <!--4000毫秒轮换一次，以卡片的形式   key 是索引-->
    <el-carousel :interval="4000" type="card" height="280px">
      <el-carousel-item v-for="(item,index) in swiperList" :key="index">
        <!--用图片显示出来-->
        <img :src="item.picImg" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import {swiperList} from "../assets/data/swiper";
  export default {
    name: "swiper",
    data() {
      return {
        swiperList: []
      }
    },
    /**什么时候引入呢*/
    created () {
      this.swiperList = swiperList;/**获取到了数据*/
    }
  }
</script>

<style lang="scss" scoped>
  import '../assets/css/swiper.scss';
</style>
