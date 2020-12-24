<template>
    <div class="layout">
        <!-- 右边主体内容 -->
        <el-row class="views-page">
            <el-col :span="24" class="views-col">
                <router-view></router-view>
            </el-col>
        </el-row>
        <!-- 头部 -->
        <Header-component></Header-component>
        <!-- 左边菜单栏 -->
        <Menu></Menu>
    </div>
</template>

<script>
export default {
    name: "base-layout",
    data() {
        return {};
    },
    methods: {},
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variable.scss";
.layout {
    width: 100%;
    min-width: 1300px;
    height: 100%;
    background: $color-background;
}
.views-page {
    padding-left: $menuBarWidth + 10px;
    padding-top: $headerBarH + 10px;
    padding-right: 10px;
    height: 100%;
    position: relative;
    z-index: 1;
    .views-col {
        min-height: 100%;
        background: $color-white;
    }
}
</style>
