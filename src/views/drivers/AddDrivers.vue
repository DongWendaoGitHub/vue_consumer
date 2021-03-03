<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <h4>新增司机信息：</h4>
    <el-form-item label="司机编号" prop="driverId">
      <el-input v-model="ruleForm.driverId"></el-input>
    </el-form-item>
    <el-form-item label="司机姓名" prop="driverName">
      <el-input v-model="ruleForm.driverName"></el-input>
    </el-form-item>
    <el-form-item label="电话号码" prop="dirverPhone">
      <el-input v-model="ruleForm.dirverPhone"></el-input>
    </el-form-item>
    <el-form-item label="登陆密码" prop="driverLoginPassword">
      <el-input v-model="ruleForm.driverLoginPassword"></el-input>
    </el-form-item>
    <el-form-item label="身份证号" prop="driverIdCard">
      <el-input v-model="ruleForm.driverIdCard"></el-input>
    </el-form-item>



    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">新增司机</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          driverId: '',
          driverName:'',
          dirverPhone: '',
          driverLoginPassword:'',
          driverIdCard:''
        },
        rules: {
          driverId: [
            { required: true, message: '司机编号不能为空', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          driverName: [
            { required: true, message: '司机姓名不能为空', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          dirverPhone: [
            { required: true, message: '司机电话不能为空', trigger: 'blur' }
          ],
          driverLoginPassword: [
            { required: true, message: '司机密码不能为空', trigger: 'blur' }
          ],
          driverIdCard: [
            { required: true, message: '身份证号不能为空', trigger: 'blur' }
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
            axios.post('http://127.0.0.1:8081/customer/drivers/insertDriver',this.ruleForm).then(function (resp) {
              if(resp.data = "success"){
                // alert("添加成功")
                _this.$message('成功创建客户信息');
                _this.$router.push(('/system_home_consume/selectDrivers'));//跳转到添加后的界面
              }
            })
          } else {
            _this.$message('客户信息创建失败');
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
