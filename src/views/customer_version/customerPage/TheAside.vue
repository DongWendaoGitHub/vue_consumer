<template>
  <!--左侧菜单需要给header留出一点空间-->

  <div class="sidebar"><!--左侧菜单-->
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#334256"
      text-color="#ffffff"
      active-text-color="#20a0ff"
      router
    >
      <template v-for="item in items">
        <!--循环 是  一个template    里面的每一项el-menu-item 也放到一个template-->
        <template>
          <el-menu-item :index="item.index" :key="item.index">
            <!--显示内容icon-->
            <i :class="item.icon"></i>
            {{item.title}}
            </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<!--左侧菜单内容放在script 里面-->
<script>
  import bus from "../../../assets/js/bus";
  export default {
    data(){
      return{
        /*菜单有个折叠属性，默认不是折叠的*/
        collapse:false,
        /*里面菜单的内容*/
        items:[
          {
            icon: 'el-icon-setting',/*图标*/
            index:'CustomerInfo',    /*指向页面*/
            title:'嘉援为您服务'
          }
          ,
          {
            icon: 'el-icon-menu',/*图标*/
            index:'Trailer',    /*指向页面*/
            title:'拖车'
          }
          ,
          {
            icon: 'el-icon-menu',/*图标*/
            index:'CallUp',    /*指向页面*/
            title:'搭电'
          }
          ,
          {
            icon: 'el-icon-menu',/*图标*/
            index:'OilTransfer',    /*指向页面*/
            title:'送油'
          }
          ,
          {
            icon: 'el-icon-menu',/*图标*/
            index:'Tires',    /*指向页面*/
            title:'轮胎'
          }
          ,
          {
            icon: 'el-icon-document',/*图标*/
            index:'CustomerOrder',    /*指向页面*/
            title:'下单'
          }
        ]
      }
    },
    computed:{
      onRoutes(){
        /*默认进入Info，或者其他  /   替换  成为  空*/
        return this.$route.path.replace('/','');
      }
    },
    created () {
      //通过bus进行主键间的通信，来折叠侧边栏   bus.$on 接收header所发送的信息
      //接收的信息是msg   之后去执行this.collapse = msg，让collapse属性发生变化   （需要header发送
      bus.$on('collapse',msg=>{
        this.collapse = msg
      })
    }
  }
</script>

<style scoped>/*scoped的意思是，当前的样式仅仅用于现在的view，不用于其他的view*/
  .sidebar{
    display: block;/*显示为块状*/
    position: absolute;/*绝对定位，  定位到哪里呢？  left  top*/
    left: 0px;
    top: 78px;
    bottom: 0px;
    background-color: #334256;/*暗黑色*/
    overflow-y: scroll;/* y 轴超出范围的话 ，  上下滚动*/
  }
.sidebar::-webkit-scrollbar{
  width: 0;
}

  .sidebar-el-menu:not(.el-menu--collapse){/*not(el-menu--collapse    只有当collapse是false 的时候才使用*/
    width: 140px;  /*左侧菜单宽度*/
  }

  /*循环的样式是100%  消除右边多出来的竖横，加下面的属性*/
  .sidebar >ul{
    height: 100%;
  }
</style>
