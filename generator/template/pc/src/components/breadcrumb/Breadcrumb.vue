<template>
    <div class="breadcrumb">
        <div class="breadcrumb-line"></div>
        <template v-for="(item, index) in data">
            <span class="breadcrumb-text" :key="index" :class="{ active: index == lastIndex && index != 0 }">{{ item }}</span>
            <span class="breadcrumb-text arrow" :key="index" v-if="index != lastIndex"> > </span>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: null,
        },
    },
    computed: {
        lastIndex() {
            return this.data.length - 1;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variable.scss";
.breadcrumb {
    height: 50px;
    line-height: 50px;
    padding: 0 30px;
    box-sizing: border-box;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 20px;
    .breadcrumb-line {
        width: 5px;
        height: 20px;
        float: left;
        background: $color-theme;
        border-radius: 2px;
        margin-top: 15px;
        margin-right: 15px;
    }
    .breadcrumb-text {
        font-size: $font-size-medium;
        font-weight: bold;
        color: $color-text;
    }
    .breadcrumb-text.active {
        color: $color-theme;
    }
    .arrow {
        padding: 0 5px;
    }
}
</style>
