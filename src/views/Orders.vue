<template>
    <div>
      <table>
        <tr class="sidebar">
          <td>订单编号</td>
          <td>总金额</td>
          <td>救援司机标识号FK</td>
          <td>下单人标识号FK</td>
          <td>是否确定(服务项目)</td>
          <td>是否困境救援</td>
          <td>故障描述</td>
          <td>是否在高速公路上</td>
          <td>故障车类型号FK</td>
          <td>故障车车牌号</td>
          <td>故障车联系电话</td>
          <td>故障车地点</td>
          <td>订单状态</td>
          <td>下单时间</td>
          <td>接单时间</td>
          <td>完成时间</td>
          <td>备注</td>
        </tr>
        <tr>
          <td>{{orders[0].order_id}}</td>
          <td>{{orders[0].total_amount}}</td>
          <td>{{orders[0].driver_id}}</td>
          <td>{{orders[0].customer_id}}</td>
          <td>{{orders[0].need_confirm}}</td>
          <td>{{orders[0].need_rescue_trouble}}</td>
          <td>{{orders[0].trouble_description}}</td>
          <td>{{orders[0].is_on_highway}}</td>
          <td>{{orders[0].break_car_type_id}}</td>
          <td>{{orders[0].break_car_id}}</td>
          <td>{{orders[0].break_car_phone}}</td>
          <td>{{orders[0].break_car_location}}</td>
          <td>{{orders[0].order_status}}</td>
          <td>{{orders[0].order_create_date}}</td>
          <td>{{orders[0].order_start_date}}</td>
          <td>{{orders[0].order_complete_date}}</td>
          <td>{{orders[0].remarks}}</td>
        </tr>
      </table>
    </div>
</template>

<script>
    export default {
        name: "Orders",
        data(){
          /*return 里面是我们可以定义的json数组*/
            return{
              msg:"msg：董文道",
              orders:[
                {
                  order_id: 1,//订单编号
                  total_amount: 999.0,//总金额
                  driver_id: '1',
                  customer_id: '1',
                  need_confirm: 1,
                  need_rescue_trouble: 1,
                  trouble_description: '拖车',
                  is_on_highway: 1,
                  break_car_type_id: 1,
                  break_car_id: '1',
                  break_car_phone: '176****1305',
                  break_car_location: '山东',
                  order_status: '正在处理...',
                  order_create_date: '2021-02-09',
                  order_start_date: '2021-02-09',
                  order_complete_date: '2021-02-09',
                  remarks: '第一份订单'
                }
              ]
            }
        },
        created() {/**页面加载完成之前做出处理*/
          //alert("订单管理页");
        const _this = this
        //this.books = resp.data   这个是错误的   这个this是   回调里面的this  所以 我们需要像下面这样  用一个变量代表上面的this
        axios.post("http://127.0.0.1:8081/customer/orders/findAll").then(function (resp) {
          /**回调里面弹出信息*/
          // console.log(resp)
          _this.orders = resp.data
        })
      }
    }
</script>

<style>
.sidebar{
  overflow-x: scroll;
}
.sidebar >ul{
  height: 100%;
}
</style>
