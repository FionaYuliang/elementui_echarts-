<template>
  <div class="manage">
    <div class="manage-header">
      <!-- <el-button type="primary">+ 新增</el-button>
      <common-form inline :formLabel="formLabel" :form="searchFrom">
        <el-button type="primary">搜索</el-button>
      </common-form> -->
    </div>

    <common-table
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
    ></common-table>
  </div>
</template>

<script>
// import CommonForm from "@/components/CommonForm.vue";
import CommonTable from "@/components/CommonTable.vue";

export default {
  components: {
    // CommonForm,
    CommonTable,
  },
  data() {
    return {
      tableData: [],
      tableLabel: [
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "age",
          label: "年龄",
        },
        {
          prop: "sex",
          label: "性别",
        },
        {
          prop: "birth",
          label: "出生日期",
          width: 200,
        },
        {
          prop: "addr",
          label: "地址",
          width: 320,
        },
      ],
      config: {
        page: 1,
        total: 20,
        loading: false,
      },
      searchForm: {
        keyword: "",
      },
      formLabel: [
        {
          model: "input",
          label: "",
        },
      ],
    };
  },
  methods: {
    getList(name = "") {
      this.config.loading = true;
      name ? (this.config.page = 1) : "";
      this.$http
        .get("/api/user/getUser", {
          param: {
            page: this.config.page,
            name,
          },
        })
        .then((res) => {
          this.tableData = res.data.list.map((item) => {
            item.sexLabel = item.sex === 0 ? "女" : "男";
            return item;
          });
          this.config.total = res.data.count;
          this.config.loading = false;
        });
    },
  },
  created() {
    this.getList();
  },
};
</script>

<style lang="scss" scoped>
.manage {
  height: 90%;
  padding-bottom: 20px;
  overflow: hidden;
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
}
</style>
