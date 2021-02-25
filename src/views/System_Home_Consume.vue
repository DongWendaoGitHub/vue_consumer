<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <!--动态读取router里面的东西-->
      <!--使用route动态设置菜单栏-->
      <h3>嘉援道路救援</h3>
      <el-menu router class="sidebar">
        <el-submenu v-for="(item,index) in $router.options.routes" :key="index" :index="index+''" v-if="item.show">
          <template slot="title"><i class="el-icon-menu"></i>{{item.name}}</template>
          <el-menu-item v-for="(item_child,index_child) in item.children" :key="index_child" :index="item_child.path"
            :class="$route.path==item_child.path?'is-active':''">{{item_child.name}}
          </el-menu-item>
        </el-submenu>
      </el-menu>

<!--          <el-menu router :default-openeds="['', '','2']">
        &lt;!&ndash;router里面有几个对象就有几个submenu&ndash;&gt;
        &lt;!&ndash;for循环   v-for&ndash;&gt;
        &lt;!&ndash;取到routes   $router.options.routes&ndash;&gt;
        &lt;!&ndash;在$router.options.routes 后面设置index属性，获取当前对象的下标，作为index属性&ndash;&gt;
        &lt;!&ndash;(index,item)  拿到下标的方式，index写在item的后面，item还是对象，index是下标&ndash;&gt;
        &lt;!&ndash;index="index+''   使得导航一和导航二的  index不一样，  就不会同时打开，而是分别打开&ndash;&gt;
        <el-submenu v-for="(item,index) in $router.options.routes" :key="index" :index="index+''">
          &lt;!&ndash;导航 name 不能写死   写成{{item.name}}&ndash;&gt;
          <template slot="title"><i class="el-icon-setting"></i>{{item.name}}</template>
          &lt;!&ndash;导航的下一层页面  添加el-item   遍历它的children属性   可以动态生成菜单&ndash;&gt;
          &lt;!&ndash;children 里面也要加一个index， 不然点击不了&ndash;&gt;
          &lt;!&ndash;class="is-active"   全部变为选项蓝色&ndash;&gt;
          <el-menu-item v-for="(item_child,index_child) in item.children" :key="index_child" :index="item_child.path"
                        :class="$route.path==item_child.path?'is-active':''">{{item_child.name}}</el-menu-item>
        </el-submenu>
      </el-menu>-->
    </el-aside>
    <el-container>
      <el-main>
        <!--main在这里加<router-view></router-view>  显示page1234的内容-->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style >
  .sidebar{
    overflow-x: scroll;
    overflow-y: scroll;
  }
  .sidebar >ul{
    height: 100%;
  }
</style>
