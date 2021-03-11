<template>
  <div class="swiper">
    <div class="background_home">
      <!--头部会对左侧菜单有控制-->
      <The-header></The-header>
      <router-view></router-view>
    </div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item,index) in swiperList" :key="index">
        <img :src="item.picImg" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import {swiperList} from "../../../assets/data/swiper";
  import TheHeader from "../customerPage/TheHeader";
  export default {
    name: "HomePage",

    components:{/*导出的主键*/
      TheHeader,
    },

    data(){
      return{
        swiperList:[]
      }
    },
    created(){
      this.swiperList = swiperList
    }
  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>



