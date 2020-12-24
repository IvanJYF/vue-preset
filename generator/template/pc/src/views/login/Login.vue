<template>
   <div class="login_content">
       <!-- 
           title:标题
           isRemenber：是否需要显示记住密码
           load：登录按钮的loading状态
           onSubmit：监听登录提交事件
        -->
       <Login title="登录系222统" :isRemenber="false" :load="isLoad" @onLogin="onSubmit($event)">
       </Login>
   </div>
</template>

<script>
import SystemConst from '@/constants/index' //系统常量
export default {
   name:'login',
   data () {
      return {
          isLoad:false
      }
   },
   methods: {
       onSubmit(e){
           if(e.vali){
                this.isLoad = true;
                // this.$api.loginApi.login —— 请求登录接口
                this.$api.loginApi.login({...e.loginInfo}).then((res)=>{
                    this.isLoad = false;
                    // 判断请求是否成功
                    if(res.sta == SystemConst.STA.SUCCESS){
                        // 将登录成功状态设置到vuex
                        this.$store.commit('setIsLogin',true)
                        // 将用户信息存储到vuex
                        this.$store.commit('setUserInfo',res.data.userInfo)
                        // 进入首页
                        this.$router.push('/main/home')

                    }else{
                        // 提示账号密码有误
                        this.$Message.error('登录失败，请输入正确的账号密码')
                    }
                    
                }).catch((err)=>{
                    // 提示请求失败
                    console.log(err)
                    this.isLoad = false;
                    this.$Message.error('网络错误')
                })
           }
       },
   }
}
</script>

<style scoped lang="scss">
.login_content{
    height: 100%;
    min-width: 1280px;
    min-height: 548px;
    position: relative;
    background: #ccc;
    .login_title{
        font-weight: bold;
        font-size: 20px;
    }
}

</style>