<template>
    <div>
      <!--整个页面的框架-->
      <el-container style="height: 500px; border: 1px solid #eee">
        <!--构建左侧菜单-->
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <!--左侧菜单内容-->
          <!--<el-menu :default-openeds="['1', '3']">&lt;!&ndash;默认打开  通过index值关联&ndash;&gt;-->
          <el-menu :default-openeds="['', '3']"><!--默认打开  通过index值关联-->
            <h3>JY__嘉援管理系统</h3>
            <el-submenu index="1">
              <!--<template slot="title"><i class="el-icon-message"></i>订单管理模块</template>-->
              <template slot="title"><i class="el-icon-menu"></i>用户管理模块</template>
              <el-menu-item-group>
                <template slot="title">用户管理</template>
                <el-menu-item index="1-1">新增用户</el-menu-item>
                <el-menu-item index="1-2">删除用户</el-menu-item>
                <el-menu-item index="1-3">修改用户</el-menu-item>
                <el-menu-item index="1-4">查询用户</el-menu-item>
              </el-menu-item-group>
              <!--<el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
              </el-submenu>-->
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>公司管理模块</template>
              <el-menu-item-group>
                <template slot="title">公司管理</template>
                <el-menu-item index="2-1">新增公司信息</el-menu-item>
                <el-menu-item index="2-2">修改公司信息</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="公司公告">
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <!--el-submenu 可以展开的菜单   index菜单的下标  文本类型  不能是数值类型-->
            <el-submenu index="3" :default-active="[3-1]"><!--先默认选中这个    字符串类型    之后可以删除-->
              <!--<template slot="title"><i class="el-icon-setting"></i>订单管理模块</template>-->
              <!--template 对应菜单名   i标签  设置菜单图标-->
              <template slot="title"><i class="el-icon-menu"></i>订单管理模块</template>
              <el-menu-item-group>
                <template slot="title">订单CURD</template>
                <el-menu-item index="3-1">查询订单</el-menu-item>
                <el-menu-item index="3-2">新增订单</el-menu-item>
                <el-menu-item index="3-2">修改订单</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="3-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="3-4">
                <template slot="title">选项4</template>
                <el-menu-item index="3-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-container>
          <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>董文道</span>
          </el-header>

          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2021-02-23',
        name: '董文道',
        address: '山东科技大学'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
