<template>
   <div class="menu_content">
		<el-menu
		  :default-active="this.$route.path"
		  class="el-menu-vertical"
		  @open="handleOpen"
		  @close="handleClose"
		  background-color="#353b4c"
		  text-color="#919AB2 "
		  active-text-color="#fff"
		  :unique-opened="true"
		  :router="true">
		  <el-menu-item index="/main/home" class="el-menu-title">
		      <i class="el-tab-icon tab-home"></i>
		      <span slot="title">首页</span>
		  </el-menu-item>
		  <el-submenu :index="item.name" v-for="item in menuData" :key="item.id">
		      <template slot="title">
		          <i :class="item.icon"></i>
		          <span>{{item.name}}</span>
		      </template>
		      <el-menu-item v-for="uitem in item.subItem" 
				:key="uitem.id" 
				:index="uitem.path">{{uitem.name}}</el-menu-item>
		  </el-submenu>
	    </el-menu>
    </div>
</template>

<script>
export default {
   name:'',
   data () {
      return {
        activeOpens:['1'],
		menuData: [
			{
				id: "01",
				name: "导航一",
				icon: "el-icon-message",
				subItem: [{
					id: "001",
					path: "/main/list",
					name: "选项1"
				}]
			},{
				id: "02",
				name: "导航二",
				icon: "el-icon-message",
				subItem: [{
					id: "001",
					path: "/main/list/detail",
					name: "详情页"
				}]
			}
		]
      }
   },
   methods: {

   }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variable.scss';
.menu_content{
    width: $menuBarWidth;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    background: $color-menu;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    padding-top: $headerBarH;
    box-sizing: border-box;
    z-index: 2;
}
.el-menu-vertical{
    border: none;
    /deep/ .el-submenu__title, .el-menu-title{
        background-color: $color-menu-d !important;
    }
    .el-menu-item.is-active{
        background: $color-theme !important;
    }
}
.el-tab-icon{
  display: inline-block;
  margin-right: 15px;
}
</style>