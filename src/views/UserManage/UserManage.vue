<template>
  <div class="manage">
    <div class="manage-header">
      <common-form :formLabel="formLabel" :form="searchFrom">
        <el-button type="primary">搜索</el-button>
      </common-form>
    </div>

    <common-table></common-table>
  </div>
</template>

<script>
import CommonForm from "@/components/CommonForm.vue";
import CommonTable from "@/components/CommonTable.vue";

export default {
  components: { CommonForm, CommonTable },
  data() {
    return {
      searchForm: {
        keyword: "",
      },
      formLabel: [
        {
          model: "keyword",
          label: "关键词",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
