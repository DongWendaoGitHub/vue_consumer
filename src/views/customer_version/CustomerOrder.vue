<template>
  <div class="CustomerOrder">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <h4>--嘉援欢迎您，请您选择所需服务--</h4>
      <el-form-item label="订单编号" prop="orderId">
        <el-input v-model="ruleForm.orderId"></el-input>
      </el-form-item>
      <el-form-item label="总金额" prop="totalAmount">
        <el-input v-model="ruleForm.totalAmount"></el-input>
      </el-form-item>
      <el-form-item label="司机id" prop="driverId">
        <el-input v-model="ruleForm.driverId"></el-input>
      </el-form-item>
      <el-form-item label="用户id" prop="customerId">
        <el-input v-model="ruleForm.customerId"></el-input>
      </el-form-item>
      <!--    <el-form-item label="是否确定(服务项目)" prop="needConfirm">-->
      <!--      <el-input v-model="ruleForm.needConfirm"></el-input>-->
      <!--    </el-form-item>-->
      <!--    <el-form-item label="是否困境救援" prop="needRescueTrouble">-->
      <!--      <el-input v-model="ruleForm.needRescueTrouble"></el-input>-->
      <!--    </el-form-item>-->
      <!--    <el-form-item label="故障描述" prop="troubleDescription">-->
      <!--      <el-input v-model="ruleForm.troubleDescription"></el-input>-->
      <!--    </el-form-item>-->
      <!--    <el-form-item label="是否高速公路" prop="isOnHighway">-->
      <!--      <el-input v-model="ruleForm.isOnHighway"></el-input>-->
      <!--    </el-form-item>-->
      <!--    <el-form-item label="故障车类型号" prop="breakCarTypeId">-->
      <!--      <el-input v-model="ruleForm.breakCarTypeId"></el-input>-->
      <!--    </el-form-item>-->
      <!--    <el-form-item label="故障车车牌号" prop="breakCarId">-->
      <!--      <el-input v-model="ruleForm.breakCarId"></el-input>-->
      <!--    </el-form-item>-->
      <!--    <el-form-item label="故障车联系电话" prop="breakCarPhone">-->
      <!--      <el-input v-model="ruleForm.breakCarPhone"></el-input>-->
      <!--    </el-form-item>-->
      <!--    <el-form-item label="故障车地点" prop="breakCarLocation">-->
      <!--      <el-input v-model="ruleForm.breakCarLocation"></el-input>-->
      <!--    </el-form-item>-->
      <!--    <el-form-item label="订单状态" prop="orderStatus">-->
      <!--      <el-input v-model="ruleForm.orderStatus"></el-input>-->
      <!--    </el-form-item>-->

      <!--    <el-form-item label="下单时间" prop="orderCreateDate">-->
      <!--      <el-input v-model="ruleForm.orderCreateDate"></el-input>-->
      <!--    </el-form-item>-->
      <!--    <el-form-item label="接单时间" prop="orderStartDate">-->
      <!--      <el-input v-model="ruleForm.orderStartDate"></el-input>-->
      <!--    </el-form-item>-->
      <!--    <el-form-item label="完成时间" prop="orderCompleteDate">-->
      <!--      <el-input v-model="ruleForm.orderCompleteDate"></el-input>-->
      <!--    </el-form-item>-->
      <!--    -->
      <el-form-item label="备注" prop="remarks">
        <el-input v-model="ruleForm.remarks"></el-input>
      </el-form-item>



      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">确认服务</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          orderId: '',
          totalAmount: ''
        },
        rules: {
          orderId: [
            { required: true, message: '订单编号不能为空', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          totalAmount: [
            { required: true, message: '总金额不能为空', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        const _this = this
        this.$refs[formName].validate((valid) => {
          if (valid) {

            // alert('创建成功!');
            //    给后台,调SpringboottestApplication
            axios.post('http://127.0.0.1:8081/customer/orders/insertOrders',this.ruleForm).then(function (resp) {
              if(resp.data = "success"){
                // alert("添加成功")
                _this.$message('成功创建');
                _this.$router.push(('/system_home_consume/selectOrders'));//跳转到添加后的界面
              }
            })
          } else {
            _this.$message('订单创建失败');
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
  .CustomerOrder{
    margin-left: 140px;
    position: absolute;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
</style>
