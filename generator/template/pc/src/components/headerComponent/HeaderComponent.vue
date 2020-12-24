<template>
    <el-row class="header-content">
        <el-col :span="12">
            <img class="logo" src="../../assets/images/logo.png" />
            <h3 class="header-title">某某应用后台运营管理系统</h3>
        </el-col>
        <el-col :span="12" class="text-right">
            <el-dropdown @command="handleCommand" trigger="click">
                <span class="el-dropdown-link">{{ userInfo.name }}</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="logOut">退出系统</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-row>
</template>

<script>
import SystemSta from "../../constants/index";
export default {
    name: "headerComponent",
    data() {
        return {
            userInfo: this.$store.state.userInfo,
        };
    },
    methods: {
        handleCommand(command) {
            var commandList = {
                logOut: () => {
                    const { id } = this.userInfo;
                    this.$api.loginApi.logOut({ id }).then((res) => {
                        if (res.sta == SystemSta.STA.SUCCESS) {
                            this.$store.commit("LOG_OUT");
                            this.$router.push("/");
                        }
                    });
                },
            };
            commandList[command]();
        },
    },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variable.scss";
.header-content {
    width: 100%;
    height: $headerBarH;
    line-height: $headerBarH;
    overflow: hidden;
    background: $color-white;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
    padding: 0 20px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    .logo {
        height: 50px;
        float: left;
        margin-top: 10px;
    }
    .header-title {
        line-height: 70px;
        font-size: $font-size-large-xxx;
        color: $color-text;
        padding-left: 20px;
        box-sizing: border-box;
        float: left;
    }
    .header-r {
        text-align: right;
        padding-right: 40px;
        box-sizing: border-box;
        line-height: 70px;
        font-size: $font-size-medium;
    }
}
</style>
