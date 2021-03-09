<template>
  <div>
    <div>
      <h3>查询司机信息：</h3>
    </div>

    <div>
      <el-table
        :data="drivers"
        border
        style="width: 100%">
        <el-table-column
          fixed
          prop="driverId"
          label="司机编号"
          width="120">
        </el-table-column>
        <el-table-column
          fixed
          prop="driverName"
          label="司机姓名"
          width="120">
        </el-table-column>
        <el-table-column
          fixed
          prop="dirverPhone"
          label="司机电话号码"
          width="120">
        </el-table-column>
        <el-table-column
          fixed
          prop="driverLoginPassword"
          label="登陆密码"
          width="120">
        </el-table-column>
        <el-table-column
          fixed
          prop="driverAge"
          label="司机年龄"
          width="100">
        </el-table-column>
        <el-table-column
          fixed
          prop="driverSex"
          label="司机性别"
          width="120">
        </el-table-column>
        <el-table-column
          fixed
          prop="driverIdCard"
          label="身份证号码"
          width="170">
        </el-table-column>
        <el-table-column
          fixed
          prop="remarks"
          label="备注"
          width="120">
        </el-table-column>


        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="updateDrivers(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click="deleteDrivers(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>

      </el-table>

      <!--展示分页-->
      <el-pagination
        background
        layout="prev, pager, next"
        page-size="2"
        :total="50"
        @current-change="page">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      /*row  就是对象  相当于是整个  表单*/

      /*删除订单  直接调后端deleteById 的方法*/
      deleteDrivers(row){
        const _this = this
        axios.delete('http://127.0.0.1:8081/customer/drivers/deleteDriverById/'+row.driverId).then(function (resp) {
          _this.$message('删除成功');
          //_this.$router.push(('/Select'));//跳转到删除后的订单页面
          window.location.reload();
        })
      },

      /*更新订单*/
      updateDrivers(row) {
        /*跳转到update界面*/
        this.$router.push({
          path: '/system_home_consume/updateDrivers',
          /*之后动态加载数据*/
          query:{
            driverId:row.driverId
          }
        })
      },
      page(currentPage){
        //alert(currentPage)
        const _this = this
        axios.get('http://127.0.0.1:8081/customer/drivers/pageDrivers/'+currentPage+'/5').then(function (resp) {
          console.log(resp)
          _this.drivers = resp.data
          _this.total = resp.data.length
        })
      }
    },
    created() {
      //alert(1)
      const _this = this
      axios.get('http://127.0.0.1:8081/customer/drivers/pageDrivers/1/5').then(function (resp) {
        console.log(resp)
        _this.drivers = resp.data
        //_this.total = resp.data.length
      })
    },

    data() {
      //total: null
      return {
        total:null,
        drivers: []
      }
    }
  }
</script>
