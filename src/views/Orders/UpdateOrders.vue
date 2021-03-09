<!--提供一个form  表单-->
<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

    <h4>修改订单项</h4>
    <el-form-item label="订单编号" prop="orderId">
      <el-input v-model="ruleForm.orderId"></el-input>
    </el-form-item>
    <el-form-item label="总金额" prop="totalAmount">
      <el-input v-model="ruleForm.totalAmount"></el-input>
    </el-form-item>
    <el-form-item label="司机id" prop="driverId">
      <el-input v-model="ruleForm.driverId"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">确认修改</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          orderId:'',
          totalAmount: '',
          driverId: ''
        },
        rules: {
          orderId: [
            { required: true, message: '订单编号不能为空', trigger: 'blur' }
          ],
          totalAmount: [
            { required: true, message: '订单总金额不能为空', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          driverId: [
            { required: true, message: '司机id不能为空', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        const _this = this
        this.$refs[formName].validate((valid) => {
          alert("是否修改")//这个提示有问题   无法取消修改   应该设置取消则返回原界面
          if (valid) {
            //给后台,调SpringboottestApplication
            axios.put('http://127.0.0.1:8081/customer/orders/updateOrders',this.ruleForm).then(function (resp) {
              if(resp.data = "success"){
                _this.$message('修改成功');
                _this.$router.push(('/system_home_consume/selectOrders'));//跳转到添加后的界面
              }
            })
          } else {
            console.log('错误提交， 修改失败！');
            _this.$message('修改失败，请完善信息');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created() {
      const _this = this
      axios.get('http://127.0.0.1:8081/customer/orders/findOrdersById/'+this.$route.query.orderId).then(function (resp) {
        _this.ruleForm = resp.data
      })
    }
  }
</script>

<style>

</style>

