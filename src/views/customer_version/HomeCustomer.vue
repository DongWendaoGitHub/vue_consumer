<template>
  <div>
    <!--头部会对左侧菜单有控制-->
    <The-header></The-header>
    <the-aside></the-aside><!--左侧菜单需要给header留出一点空间-->
    <router-view></router-view>
  </div>
</template>

<script>
  import TheAside from "./customerPage/TheAside";
  import TheHeader from "./customerPage/TheHeader";
  export default {
    components:{/*导出的主键*/
      TheHeader,
      TheAside
    },

    name: ''
  }
</script>

<style scoped>

</style>
