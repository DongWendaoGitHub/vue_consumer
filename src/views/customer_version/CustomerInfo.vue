<template>
  <div class="swapper">

    <div class="photo">
      <el-carousel :interval="4000" type="card" height="100px">
        <el-carousel-item v-for="(item,index) in swiperList" :key="index">
          <img :src="item.picImg" />
        </el-carousel-item>
      </el-carousel>
    </div>

<!--    <div>-->
<!--      <div class="demo-image__placeholder">-->
<!--        <div class="block">-->
<!--          <span class="demonstration">默认</span>-->
<!--          <el-image :src="src"></el-image>-->
<!--        </div>-->
<!--        <div class="block">-->
<!--          <span class="demonstration">自定义</span>-->
<!--          <el-image :src="src">-->
<!--            <div slot="placeholder" class="image-slot">-->
<!--              加载中<span class="dot">...</span>-->
<!--            </div>-->
<!--          </el-image>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

    <div class="box">
      <img src="@/assets/img/jy/info.jpg" width="100%"/>
      <h4>拖车服务</h4>
    </div>
    <div class="box">
      <img src="@/assets/img/jy/info.jpg" width="100%"/>
      <h4>拖车服务</h4>
    </div>
    <div class="box">
      <img src="@/assets/img/jy/info.jpg" width="100%"/>
      <h4>拖车服务</h4>
    </div>
    <div class="box">
      <img src="@/assets/img/jy/info.jpg" width="100%"/>
      <h4>拖车服务</h4>
    </div>
    <div class="box">
      <img src="@/assets/img/jy/info.jpg" width="100%"/>
      <h4>拖车服务</h4>
    </div>
    <div class="box">
      <img src="@/assets/img/jy/info.jpg" width="100%"/>
      <h4>拖车服务</h4>
    </div>
    <div class="box">
      <img src="@/assets/img/jy/info.jpg" width="100%"/>
      <h4>拖车服务</h4>
    </div>
    <div class="box">
      <img src="@/assets/img/jy/info.jpg" width="100%"/>
      <h4>拖车服务</h4>
    </div>


  </div>
</template>

<script>
  import {swiperList} from "../../assets/data/swiper";
  export default {
    name: "HomePage",

    data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    },

    components:{/*导出的主键*/

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
  .swapper{
    margin-left: 150px;
  }

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
  .box{width:25%; text-align:center; font-szie:18px;float:left;}
  .box img {width:100%;}
.photo{
  width: 100%;
  height: 100px;
}
</style>
