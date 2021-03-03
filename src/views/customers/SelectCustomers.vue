<template>
  <div>
    <div>
      <h3>查询客户信息：</h3>
    </div>

    <div>
      <el-table
        :data="customers"
        border
        style="width: 100%">
        <el-table-column
          fixed
          prop="customerId"
          label="客户编号"
          width="120">
        </el-table-column>
        <el-table-column
          fixed
          prop="customerName"
          label="客户姓名"
          width="120">
        </el-table-column>
        <el-table-column
          fixed
          prop="customerAddress"
          label="客户家庭地址"
          width="120">
        </el-table-column>
        <el-table-column
          fixed
          prop="customerSex"
          label="客户性别"
          width="80">
        </el-table-column>
        <el-table-column
          fixed
          prop="customerAge"
          label="客户年龄"
          width="100">
        </el-table-column>
        <el-table-column
          fixed
          prop="customerPhone"
          label="电话号码"
          width="120">
        </el-table-column>
        <el-table-column
          fixed
          prop="customerPassword"
          label="客户密码"
          width="120">
        </el-table-column>
        <el-table-column
          fixed
          prop="customerMailbox"
          label="客户邮箱"
          width="120">
        </el-table-column>
        <el-table-column
          fixed
          prop="customerIdCard"
          label="身份证号"
          width="150">
        </el-table-column>

        <el-table-column
          prop="remarks"
          label="备注"
          width="120">
        </el-table-column>

        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="updateCustomers(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click="deleteCustomers(scope.row)" type="text" size="small">删除</el-button>
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
      /*row  就是对象  相当于是整个订单  order*/

      /*删除订单  直接调后端deleteById 的方法*/
      deleteCustomers(row){
        const _this = this
        axios.delete('http://127.0.0.1:8081/customer/customers/deleteCustomersByCustomersId/'+row.customerId).then(function (resp) {
          _this.$message('删除成功');
          //_this.$router.push(('/Select'));//跳转到删除后的订单页面
          window.location.reload();
        })
      },

      /*更新订单*/
      updateCustomers(row) {
        /*跳转到update界面*/
        this.$router.push({
          path: '/system_home_consume/updateCustomers',
          /*之后动态加载数据*/
          query:{
            customerId:row.customerId
          }
        })
      },
      page(currentPage){
        //alert(currentPage)
        const _this = this
        axios.get('http://127.0.0.1:8081/customer/customers/pageCustomers/'+currentPage+'/5').then(function (resp) {
          console.log(resp)
          _this.customers = resp.data
          _this.total = resp.data.length
        })
      }
    },
    created() {
      //alert(1)
      const _this = this
      axios.get('http://127.0.0.1:8081/customer/customers/pageCustomers/1/5').then(function (resp) {
        console.log(resp)
        _this.customers = resp.data
        //_this.total = resp.data.length
      })
    },

    data() {
      //total: null
      return {
        total:null,
        customers: []
      }
    }
  }
</script>
