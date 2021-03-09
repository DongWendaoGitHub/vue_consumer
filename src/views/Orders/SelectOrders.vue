<template>
  <div>
    <div>
      <h3>查询订单：</h3>
    </div>

    <div>
      <el-table
        :data="orders"
        border
        style="width: 100%">
        <el-table-column
          fixed
          prop="orderId"
          label="订单编号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="totalAmount"
          label="总金额"
          width="120">
        </el-table-column>
        <el-table-column
          prop="driverId"
          label="司机id"
          width="120">
        </el-table-column>
        <el-table-column
          prop="customerId"
          label="用户id"
          width="120">
        </el-table-column>
        <el-table-column
          prop="needConfirm"
          label="是否确定(服务项目)"
          width="150">
        </el-table-column>
        <el-table-column
          prop="needRescueTrouble"
          label="是否困境救援"
          width="120">
        </el-table-column>
        <el-table-column
          prop="troubleDescription"
          label="故障描述"
          width="100">
        </el-table-column>
        <el-table-column
          prop="isOnHighway"
          label="是否高速公路"
          width="120">
        </el-table-column>
        <el-table-column
          prop="breakCarTypeId"
          label="故障车类型号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="breakCarId"
          label="故障车车牌号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="breakCarPhone"
          label="故障车联系电话"
          width="120">
        </el-table-column>
        <el-table-column
          prop="breakCarLocation"
          label="故障车地点"
          width="120">
        </el-table-column>
        <el-table-column
          prop="orderStatus"
          label="订单状态"
          width="120">
        </el-table-column>
        <el-table-column
          prop="orderCreateDate"
          label="下单时间"
          width="120">
        </el-table-column>
        <el-table-column
          prop="orderStartDate"
          label="接单时间"
          width="120">
        </el-table-column>
        <el-table-column
          prop="orderCompleteDate"
          label="完成时间"
          width="120">
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
            <el-button @click="updateorder(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click="deleteOrders(scope.row)" type="text" size="small">删除</el-button>
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
      deleteOrders(row){
        const _this = this
        axios.delete('http://127.0.0.1:8081/customer/orders/deleteOrdersByOrdersId/'+row.orderId).then(function (resp) {
          _this.$message('删除成功');
          //_this.$router.push(('/Select'));//跳转到删除后的订单页面
          window.location.reload();
        })
      },

      /*更新订单*/
      updateorder(row) {
        /*跳转到update界面*/
        this.$router.push({
          path: '/system_home_consume/updateOrders',
          /*之后动态加载数据*/
          query:{
            orderId:row.orderId
          }
        })
      },
      page(currentPage){
        //alert(currentPage)
        const _this = this
        axios.get('http://localhost:8081/customer/orders/pageOrders/'+currentPage+'/5').then(function (resp) {
          console.log(resp)
          _this.orders = resp.data
          _this.total = resp.data.length
        })
      }
    },
    created() {
      //alert(1)
      const _this = this
      axios.get('http://localhost:8081/customer/orders/pageOrders/1/5').then(function (resp) {
        console.log(resp)
        _this.orders = resp.data
        //_this.total = resp.data.length
      })
    },

    data() {
      //total: null
      return {
        total:null,
        orders: [
         {
          order_id: 20210203,
          total_amount: 8888.0,
          driver_id: 1,
          customer_id: 1,
          need_confirm: 1,
          need_rescue_trouble: 1,
          trouble_description:'拖车',
          is_on_highway: 1,
          break_car_type_id: 1
        }
        ]
      }
    }
  }
</script>
