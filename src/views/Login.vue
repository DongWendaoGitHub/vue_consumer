<template>
    <div class="login-resign-background">
      <div class="jiayuan-title">欢迎来到嘉援道路救援</div>
      <div class="loginContainer">
        <!--el-form   表单-->
        <el-form :rules="rules" ref="loginForm" :model="loginForm">
          <h3 class="loginTitle">系统登录</h3>
          <el-form-item prop="username" ref=“addUserFormRef”>
            <!--输入框-->
            <el-input type="text" auto-complete="false" v-model="loginForm.username" placeholder="请输入手机号码"></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input type="password" auto-complete="false" v-model="loginForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>

<!--          <el-form-item prop="code">-->
<!--            <el-input type="text" auto-complete="false" v-model="loginForm.code" placeholder="点击图片更换验证码" class="loginCode"></el-input>-->
<!--            <img :src="captchaUrl" @click="updateCaptcha">-->
<!--          </el-form-item>-->

          <el-form-item>
            <el-checkbox v-model="checked" class="loginRemember">记住密码</el-checkbox>
            <el-button type="primary" class="loginButton" @click="submitLogin">登陆</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
          // 自定义手机号规则
          var checkMobile = (rule, value, callback) => {
            const regMobile = /^1[34578]\d{9}$/
            if (regMobile.test(value)) {
              return callback()
            }
            // 返回一个错误提示
            callback(new Error('请输入合法的手机号码'))
          }
            return{
                /*new Date()随时随地最新的时间*/
                captchaUrl:'/captcha?time='+new Date(), /*加time参数，不加可能看不清或者想要更换验证码时无法接收到刷新的验证码*/        /*验证码*/
                loginForm:{
                    username:'17685841305',
                    password:'liusiping',
                  //  code:'aaa'              /*验证码*/
                },
                checked:true,

                rules:{
                    username:[
                      {required:true,message:'手机号码不能为空', trigger:'blur'},
                      { validator: checkMobile, trigger: 'blur' }
                      ],
                    password:[{required:true,message:'密码不能为空', trigger:'blur'}],
                    //code:[{required:true,message:'验证码不能为空', trigger:'blur'}]
                }

            }
        }
        ,
        methods:{

          // 监听 添加用户对话框的关闭事件
          addDialogClosed () {
            this.$refs.addUserFormRef.resetFields()
          },

          updateCaptcha(){/*验证码*/
                this.captchaUrl = '/captcha?time='+new Date();
            },
            submitLogin(){

                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                      this.$router.push("/System_Home_Consume")
                        this.$message({
                            message: '嘉援欢迎您！',
                            type: 'success'
                        });
                    } else {
                        console.log('error submit!!');
                        this.$message.error('错了哦，请输入完整信息');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style>
  .login-resign-background{
    position: absolute;
    background: url("../assets/img/dwd.png");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
    /*登录框*/
    .loginContainer{
        border-radius: 15px;
        background-clip: padding-box;     /*背景*/
        margin: 188px auto;               /*边距*/
        width: 350px;
        padding: 15px 35px 15px 35px;     /*边距*/
        background: #fff;                 /*背景颜色*/
        border: 1px solid #eaeaea;        /*边框*/
        box-shadow: 0 0 25px #cac6c6;     /*阴影*/
    }

    /*系统登录*/
    .loginTitle{
        margin: 4px auto;/*内边距*/
        text-align: center;/*居中*/
    }

    /*登录按钮*/
    .loginButton{
        margin-left: 195px;
    }

    .loginCode{
        margin-right: 5px;
        width: 180px;
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

</style>
