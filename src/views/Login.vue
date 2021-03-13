<template>
    <div class="login-resign-background">
<!--      <div>-->
<!--        <el-button class="resign">点击这里进行注册</el-button>-->
<!--      </div>-->
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
            <el-button style="float:right" type="primary" class="loginButton" @click="submitLogin">登陆</el-button>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" class="forgetpassword" @click="forgetpassword">忘记密码</el-button>
            <el-button style="float:right" type="primary" class="registeredButton" @click="submitregistered">注册</el-button>
          </el-form-item>

        </el-form>
      </div>
    </div>
</template>

<script>
  import {getLoginStatus} from "../api/index"
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
                  // username:'',
                  //  password:'',
                    username:'',
                    password:'',
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

          //注册
          submitregistered(){
            this.$router.push("/Registered")
          },

          // 监听 添加用户对话框的关闭事件
          addDialogClosed () {
            this.$refs.addUserFormRef.resetFields()
          },

          updateCaptcha(){/*验证码*/
                this.captchaUrl = '/captcha?time='+new Date();
            },
            submitLogin(){
                //this.$refs.loginForm.validate((valid) => {
                    //if (valid) {
                      let params = new URLSearchParams()
                      params.append('customerPhone', this.loginForm.username)
                      params.append('customerPassword', this.loginForm.password)
                      /* 提交    就是直接调用方法就可以  */
                      getLoginStatus(params).then((res) => {
                        if (res.code == 1) {
                            this.$message({
                                message: '嘉援欢迎您！',
                                type: 'success'
                            });
                          this.$router.push("/customerInfo")
                          // this.$router.push("/HomeCustomer")
                         //  this.$router.push("/System_Home_Consume")
                        } else {
                          this.$message.error('错了哦，请输入完整信息或注册');
                          return false;
                        }
                      });

                      // this.$router.push("/System_Home_Consume")
                      //   this.$message({
                      //       message: '嘉援欢迎您！',
                      //       type: 'success'
                      //   });
                   // } else {
                     //   console.log('error submit!!');
                     //   this.$message.error('错了哦，请输入完整信息');
                     //   return false;
                   // }
               // });
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
        margin: 13% 20% 10% 34%;               /*边距*/
        width: 25%;
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

    }

    /*登录验证码*/
    .loginCode{

    }
  .jiayuan-title{
    position: absolute;
    top: 50%;
    width: 100%;
    margin-top: -18%;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    color: #000000;
    box-shadow: 0 0 25px #cac6c6;
  }

  .forgetpassword{
    margin-left: 0px;
  }

  .registeredButton{

  }

</style>
