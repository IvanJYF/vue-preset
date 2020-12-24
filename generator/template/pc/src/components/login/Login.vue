<template>
   <div class="login_box">
        <div v-if="title!=''" class="login_title text-center">{{title}}</div>
        <div v-else>
            <!-- 自定义标题样式 -->
            <slot name="title"></slot>
        </div>
        <el-form :model="loginInfo">
            <el-form-item label="用户名：">
                <el-input v-model="loginInfo.username" clearable placeholder="请输入用户名"> 
                    <i slot="prefix" class="el-input__icon el-icon-user"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="密码：">
                <el-input v-model="loginInfo.password" show-password placeholder="请输入密码">
                    <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
            </el-form-item>
        </el-form>
        <div class="login-input" v-if="isRemenber">
            <el-checkbox v-model="loginInfo.checked">记住登录状态</el-checkbox>
        </div>
        <el-button type="primary" :loading="load" style="width:100%" @click="onSubmit">登录</el-button>
    </div>
</template>

<script>
export default {
   name:'login',
   props:['isRemenber','title','load'],
   data () {
      return {
          loginInfo:{
              username:'', //登录账号
              password:'', //登录密码
              checked:false, //是否记住密码
          },
          isLoad:false, //loading状态
      }
   },
   methods: {
       onSubmit(){
           const {username,password} = this.loginInfo
            // 使用isEmpty 判断账号密码是否为空  
           if(username != '' && password != ''){
                this.$emit('onLogin',{
                    vali:true, //校验成功
                    loginInfo:this.loginInfo, //账号密码
                })
           }else{
                this.$Message.error('账号密码不能为空')
                this.$emit('onLogin',{
                    vali:false,//校验失败
                })
           }
       },
   }
}
</script>

<style scoped lang="scss">
.login_box{
    min-width: 300px;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 10px;
    position: fixed;
    left: 50%;
    top: 50%;
   -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    background: #fff;
    .login_title{
        font-weight: bold;
        font-size: 20px;
    }
    .login-input{
        width: 100%;
        overflow: hidden;
        margin-bottom: 10px;
    }
}

</style>