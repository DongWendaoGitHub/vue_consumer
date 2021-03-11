<template>
  <div class="ms-header">
    <!--折叠图片-->
    <div class="collapse-btn" @click="collapseChange">
      <i class="el-icon-menu"></i>
    </div>

    <div class="car_logo">
      嘉援道路救援
    </div>
    <div class="car_header_right">
      <!--全屏按钮-->
      <div class="btn-fullscreen" @click="handleFullScreen">
        <!--全屏提示    是全屏的时候，提示取消全屏   不是全屏  提示全屏   需要在data里面加一个变量-->
        <el-tooltip :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
          <i class="el-icon-rank"></i>
        </el-tooltip>
      </div>
      <!--头像-->
      <div class="user-avator">
        <img src= "src/assets/img/dudu.jpg">
      </div>
      <!--下拉菜单  点击的时候   写函数执行-->
      <el-dropdown class="user-name" trigger="click" @command="handleCommand">
        <!--加一个样式-->
        <span class="el-dropdown-link">
          <!--直接取用-->
          {{username}}
        </span>
      </el-dropdown>
    </div>

  </div>
</template>

<script>
  import bus from "../../../assets/js/bus";
  export default {
    data(){
      return{
        collapse:false,
        fullscreen:false
      }
    },
    /*加一个监视*/
    computed:{
      /*获取username*/
      username(){
        return localStorage.getItem('username');
      }
    },
    methods:{
      /*侧边栏折叠*/
      collapseChange(){
        /*改变他的状态*/
        this.collapse = !this.collapse;
        /*提交最新的状态*/
        bus.$emit('collapse',this.collapse);
      },
      /*全屏事件*/
      handleFullScreen(){
        /*如果当前是全屏*/
        if(this.fullscreen){
          /*照顾浏览器的兼容性*/
          if(document.exitFullscreen){
            document.exitFullscreen();
          }else if(document.webkitCancelFullScreen){/*safari   chrome*/
            document.webkitCancelFullScreen();
          }else if(document.mozCancelFullScreen){/*火狐浏览器*/
            document.mozCancelFullScreen();
          }else if(document.msExitFullScreen){/*ie浏览器*/
            document.msExitFullScreen();
          }
        }
        /*否则进入全屏状态*/
        else{
          let element = document.documentElement;
          if(element.requestFullscreen){
            element.requestFullscreen();
          }else if(element.webkitRequestFullScreen){
            element.webkitRequestFullScreen();
          }else if(element.mozRequestFullScreen){
            element.mozRequestFullScreen();
          }else if(element.msRequestFullScreen){
            element.msRequestFullScreen();
          }
        }
        this.fullscreen = !this.fullscreen;
      }
    }
  }
</script>

<style scoped>
  .ms-header {   /*jiayuan*/
    position: relative;/*相对定位*/
    background-color: #6266ff;
    box-sizing: border-box;/*带阴影状态的   有立体感*/
    width: 101%;
    height: 70px;
    font-size: 22px;
    color: white;
    margin-left: -10px;
  }

  .collapse-btn{
    float: left;/*放在最左边*/
    padding: 0px 21px;/* 左右间距 21    上下间距 0*/
    cursor: pointer;/*鼠标移过来之后，  变成手状*/
    line-height: 70px;/*高度*/
  }
  .car_logo{
    float: left;
    line-height: 70px;
  }

  .car_header_right{
    float: right;/*位置在右边*/
    padding-right: 50px;/*右边距*/
    display: flex;/*横着布局， 自由分布*/
    height: 70px;
    align-items: center;/*里面的内容  居中*/
  }

  /*全屏*/
  .btn-fullscreen{
    margin-right: 5px;
    font-size: 24px;
    transform: rotate(45deg);/*转45度*/
    cursor: pointer;
  }
  /*定义头像的宽高   位置*/
  .user-avator{
    margin-left: 20px;
    cursor: pointer;
  }

  /*头像里面你的img属性*/
  .user-avator img{
    display: block;/*显示出来*/
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .user-name{
    margin-left: 10px;
  }

  /*用户名样式*/
  .el-dropdown-link{
    color: #fc4eff;
    cursor: pointer;
  }
</style>

<!--下面是20210310之前的代码   前端页面刚刚做一点-->

<!--<template>-->
<!--  <div class="ms-header">-->
<!--    &lt;!&ndash;折叠图片&ndash;&gt;-->
<!--    <div class="collapse-btn" @click="collapseChange">-->
<!--      <i class="el-icon-menu"></i>-->
<!--    </div>-->

<!--    <div class="car_logo">-->
<!--      嘉援道路救援-->
<!--    </div>-->
<!--    <div class="car_header_right">-->
<!--      &lt;!&ndash;全屏按钮&ndash;&gt;-->
<!--      <div class="btn-fullscreen" @click="handleFullScreen">-->
<!--        &lt;!&ndash;全屏提示    是全屏的时候，提示取消全屏   不是全屏  提示全屏   需要在data里面加一个变量&ndash;&gt;-->
<!--        <el-tooltip :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">-->
<!--          <i class="el-icon-rank"></i>-->
<!--        </el-tooltip>-->
<!--      </div>-->
<!--      &lt;!&ndash;头像&ndash;&gt;-->
<!--      <div class="user-avator">-->
<!--        <img src= "src/assets/img/dudu.jpg">-->
<!--      </div>-->
<!--      &lt;!&ndash;下拉菜单  点击的时候   写函数执行&ndash;&gt;-->
<!--      <el-dropdown class="user-name" trigger="click" @command="handleCommand">-->
<!--        &lt;!&ndash;加一个样式&ndash;&gt;-->
<!--        <span class="el-dropdown-link">-->
<!--          &lt;!&ndash;直接取用&ndash;&gt;-->
<!--          {{username}}-->
<!--        </span>-->
<!--      </el-dropdown>-->
<!--    </div>-->

<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--  import bus from "../../../assets/js/bus";-->
<!--  export default {-->
<!--    data(){-->
<!--      return{-->
<!--        collapse:false,-->
<!--        fullscreen:false-->
<!--      }-->
<!--    },-->
<!--    /*加一个监视*/-->
<!--    computed:{-->
<!--      /*获取username*/-->
<!--      username(){-->
<!--        return localStorage.getItem('username');-->
<!--      }-->
<!--    },-->
<!--    methods:{-->
<!--      /*侧边栏折叠*/-->
<!--      collapseChange(){-->
<!--        /*改变他的状态*/-->
<!--        this.collapse = !this.collapse;-->
<!--        /*提交最新的状态*/-->
<!--        bus.$emit('collapse',this.collapse);-->
<!--      },-->
<!--      /*全屏事件*/-->
<!--      handleFullScreen(){-->
<!--        /*如果当前是全屏*/-->
<!--        if(this.fullscreen){-->
<!--          /*照顾浏览器的兼容性*/-->
<!--          if(document.exitFullscreen){-->
<!--            document.exitFullscreen();-->
<!--          }else if(document.webkitCancelFullScreen){/*safari   chrome*/-->
<!--            document.webkitCancelFullScreen();-->
<!--          }else if(document.mozCancelFullScreen){/*火狐浏览器*/-->
<!--            document.mozCancelFullScreen();-->
<!--          }else if(document.msExitFullScreen){/*ie浏览器*/-->
<!--            document.msExitFullScreen();-->
<!--          }-->
<!--        }-->
<!--        /*否则进入全屏状态*/-->
<!--        else{-->
<!--          let element = document.documentElement;-->
<!--          if(element.requestFullscreen){-->
<!--            element.requestFullscreen();-->
<!--          }else if(element.webkitRequestFullScreen){-->
<!--            element.webkitRequestFullScreen();-->
<!--          }else if(element.mozRequestFullScreen){-->
<!--            element.mozRequestFullScreen();-->
<!--          }else if(element.msRequestFullScreen){-->
<!--            element.msRequestFullScreen();-->
<!--          }-->
<!--        }-->
<!--        this.fullscreen = !this.fullscreen;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</script>-->

<!--<style scoped>-->
<!--  .ms-header {   /*jiayuan*/-->
<!--    position: relative;/*相对定位*/-->
<!--    background-color: #6266ff;-->
<!--    box-sizing: border-box;/*带阴影状态的   有立体感*/-->
<!--    width: 101%;-->
<!--    height: 70px;-->
<!--    font-size: 22px;-->
<!--    color: white;-->
<!--    margin-left: -10px;-->
<!--  }-->

<!--  .collapse-btn{-->
<!--    float: left;/*放在最左边*/-->
<!--    padding: 0px 21px;/* 左右间距 21    上下间距 0*/-->
<!--    cursor: pointer;/*鼠标移过来之后，  变成手状*/-->
<!--    line-height: 70px;/*高度*/-->
<!--  }-->
<!--  .car_logo{-->
<!--    float: left;-->
<!--    line-height: 70px;-->
<!--  }-->

<!--  .car_header_right{-->
<!--    float: right;/*位置在右边*/-->
<!--    padding-right: 50px;/*右边距*/-->
<!--    display: flex;/*横着布局， 自由分布*/-->
<!--    height: 70px;-->
<!--    align-items: center;/*里面的内容  居中*/-->
<!--  }-->

<!--  /*全屏*/-->
<!--  .btn-fullscreen{-->
<!--    margin-right: 5px;-->
<!--    font-size: 24px;-->
<!--    transform: rotate(45deg);/*转45度*/-->
<!--    cursor: pointer;-->
<!--  }-->
<!--  /*定义头像的宽高   位置*/-->
<!--  .user-avator{-->
<!--    margin-left: 20px;-->
<!--    cursor: pointer;-->
<!--  }-->

<!--  /*头像里面你的img属性*/-->
<!--  .user-avator img{-->
<!--    display: block;/*显示出来*/-->
<!--    width: 40px;-->
<!--    height: 40px;-->
<!--    border-radius: 50%;-->
<!--  }-->

<!--  .user-name{-->
<!--    margin-left: 10px;-->
<!--  }-->

<!--  /*用户名样式*/-->
<!--  .el-dropdown-link{-->
<!--    color: #fc4eff;-->
<!--    cursor: pointer;-->
<!--  }-->
<!--</style>-->
