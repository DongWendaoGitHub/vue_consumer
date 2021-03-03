<!--提供一个form  表单-->
<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

    <h4>修改客户信息：</h4>
    <el-form-item label="客户编号" prop="customerId">
      <el-input v-model="ruleForm.customerId"></el-input>
    </el-form-item>
    <el-form-item label="电话号码" prop="customerPhone">
      <el-input v-model="ruleForm.customerPhone"></el-input>
    </el-form-item>
    <el-form-item label="客户密码" prop="customerPassword">
      <el-input v-model="ruleForm.customerPassword"></el-input>
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
          customerId:'',
          customerPhone: '',
          customerPassword: ''
        },
        rules: {
          customerId: [
            { required: true, message: '客户编号不能为空', trigger: 'blur' }
          ],
          customerPhone: [
            { required: true, message: '电话号码不能为空', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          customerPassword: [
            { required: true, message: '客户密码不能为空', trigger: 'blur' }
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
            axios.put('http://127.0.0.1:8081/customer/customers/updateCustomers',this.ruleForm).then(function (resp) {
              if(resp.data = "success"){
                _this.$message('修改成功');
                _this.$router.push(('/system_home_consume/selectCustomers'));//跳转到添加后的界面
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
      axios.get('http://127.0.0.1:8081/customer/customers/findCustomerById/'+this.$route.query.customerId).then(function (resp) {
        _this.ruleForm = resp.data
      })
    }
  }
</script>

<style>

</style>

