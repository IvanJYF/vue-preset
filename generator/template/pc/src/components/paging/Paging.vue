<template>
  <div>
    <el-row class="pagination">
      <el-col :span="4" class="pagination-text">
        共
        <span>{{totalPage}}</span>页/
        <span>{{totalCount}}</span>条数据
      </el-col>
      <el-col :span="20" class="text-right">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          layout="prev, pager, next, jumper"
          :page-count="totalPage"
          prev-text="上一页"
          next-text="下一页"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Paging",
  props: ["pageNo", "totalPage", "totalCount"],
  data() {
    return {
      currentPage: this.currentPage //分页 当前第几页
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.$emit("handleCurrentChange", val);
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination {
  margin: 10px 0;
  .pagination-text {
    line-height: 30px;
    font-size: 14px;
    span {
      color: #4e9bf5;
    }
  }
}
</style>