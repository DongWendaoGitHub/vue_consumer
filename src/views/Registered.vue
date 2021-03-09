<template>
  <div class="login-resign-background">
    <div class="jiayuan-title">欢迎来到嘉援道路救援</div>
    <div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <h4 class="RegisteredTitle">用户注册</h4>
        <el-form-item label="客户编号" prop="customerId">
          <el-input v-model="ruleForm.customerId"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="customerPhone">
          <el-input v-model="ruleForm.customerPhone"></el-input>
        </el-form-item>
        <el-form-item label="客户密码" prop="customerPassword">
          <el-input v-model="ruleForm.customerPassword" type="password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      var checkMobile = (rule, value, callback) => {
        const regMobile = /^1[34578]\d{9}$/
        if (regMobile.test(value)) {
          return callback()
        }
        // 返回一个错误提示
        callback(new Error('请输入合法的手机号码'))
      }
      return {
        ruleForm: {
          customerId: '2021038888',
          customerPhone:'',
          customerPassword: ''
        },
        rules: {
          customerId: [
            { required: true, message: '客户编号不能为空', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          customerPhone: [
            { required: true, message: '电话号码不能为空', trigger: 'blur' },
            { validator: checkMobile, trigger: 'blur' }
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
          if (valid) {
            // alert('创建成功!');
            //    给后台,调SpringboottestApplication
            axios.post('http://127.0.0.1:8081/customer/customers/insertCustomers',this.ruleForm).then(function (resp) {
              if(resp.data = "success"){
                // alert("添加成功")
                _this.$message('注册成功');
                _this.$router.push(('/'));//跳转到添加后的界面
              }
            })
          } else {
            _this.$message('注册失败，请完善信息或查看格式');
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
  .demo-ruleForm{
    border-radius: 15px;
    background-clip: padding-box;     /*背景*/
    margin: 188px auto;               /*边距*/
    width: 350px;
    padding: 15px 35px 15px 35px;     /*边距*/
    background: #fff;                 /*背景颜色*/
    border: 1px solid #eaeaea;        /*边框*/
    box-shadow: 0 0 25px #cac6c6;     /*阴影*/
  }
  .RegisteredTitle{
    margin: 4px auto;/*内边距*/
    text-align: center;/*居中*/
    border: 1px solid #eaeaea;        /*边框*/
    box-shadow: 0 0 25px #cac6c6;     /*阴影*/
    padding: 15px 65px 15px 65px;     /*边距*/
    background: #fff;                 /*背景颜色*/
    font-size: 20px;
  }
  .jiayuan-title{
    position: absolute;
    top: 50%;
    width: 100%;
    margin-top: -230px;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    color: #000000;
    box-shadow: 0 0 25px #cac6c6;
  }
  .login-resign-background{
    position: absolute;
    background: url("../assets/img/dwd.png");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
</style>

