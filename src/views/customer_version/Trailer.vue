<template>
    <div class="trailer">

      <div class="trailer-title">我们竭诚为您介绍拖车服务</div>

      <div class="box">
        <img src="@/assets/img/jy/info.jpg" width="100%"/>
      </div>
      <div class="box">
        <img src="@/assets/img/jy/infob.jpeg" width="100%"/>
      </div>
      <div class="box">
        <img src="@/assets/img/jy/infoc.jpg" width="100%"/>
      </div>
      <div class="box">
        <img src="@/assets/img/jy/infod.jpg" width="100%"/>
      </div>

      <div>
        <h3>拖车是我们的主要业务之一，也是您最可能遇到的困难</h3>
        <h3>如需人工服务，请联系202103098888</h3>
      </div>

      <div>
        <el-button type="primary" class="tuoche" @click="trailerOrder">拖车下单</el-button>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Trailer"
    }
</script>

<style scoped>
.trailer{
  margin-left:9.4%;
}
  .trailer-title{
    position: absolute;
    top: 50%;
    width: 89%;
    margin-top: -230px;
    margin-right: -100px;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    color: #6266ff;
    background-color: #8cc5ff;
    box-shadow: 0 0 25px #cac6c6;
  }

</style>
