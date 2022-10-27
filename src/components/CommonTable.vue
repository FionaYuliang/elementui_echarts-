<template>
  <div class="common-table">
    <el-table
      :data="tableData"
      style="height: 90%"
      stripe
      v-loading="config.loading"
    >
      <el-table-column label="序号" width="85">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{
            (config.page - 1) * 20 + scope.$index + 1
          }}</span>
        </template>
      </el-table-column>

      <el-table-column
        show-overflow-tooltip
        v-for="item in tableLabel"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.width ? item.width : 125"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pager"
      layout="prev, pager, next"
      :total="config.total"
      :current-page="config.page"
      :page-size="20"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    tableData: Array,
    tableLabel: Array,
    config: Object,
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style lang="scss" scoped>
.common-table {
  height: calc(100% - 62px);
  background-color: #fff;
  position: relative;
  .pager {
    position: absolute;
    bottom: 0;
    right: 20px;
  }
}
</style>
