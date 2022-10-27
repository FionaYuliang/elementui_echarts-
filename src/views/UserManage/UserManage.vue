<template>
  <div class="manage">
    <el-dialog
      title="更新用户"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <common-form
        ref="form"
        :formLabel="operationFormLabel"
        :form="operateForm"
      ></common-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary">+ 新增</el-button>
      <common-form inline :formLabel="formLabel" :form="searchFrom">
        <el-button type="primary">搜索</el-button>
      </common-form>
    </div>

    <common-table
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      :changePage="changePage"
      @edit="editUser"
      @del="delUser"
    ></common-table>
  </div>
</template>

<script>
import CommonForm from "@/components/CommonForm.vue";
import CommonTable from "@/components/CommonTable.vue";

export default {
  components: {
    CommonForm,
    CommonTable,
  },
  data() {
    return {
      operateType: "add",
      dialogVisible: false,
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
      operateForm: {
        name: "",
        addr: "",
        age: "",
        birth: "",
        sex: "",
      },
      searchForm: {
        keyword: "",
      },
      operationFormLabel: [
        {
          model: "name",
          label: "姓名",
        },
        {
          model: "age",
          label: "年龄",
        },
        {
          model: "sex",
          label: "性别",
          type: "select",
          options: [
            {
              label: "男",
              value: 1,
            },
            {
              label: "女",
              value: 0,
            },
          ],
        },
        {
          model: "birth",
          label: "出生日期",
          typeL: "date",
        },
        {
          model: "addr",
          label: "地址",
        },
      ],
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
    changePage(value) {
      console.log(value);
    },
    editUser(row) {
      this.operateType = "edit";
      this.dialogVisible = true;
      this.operateForm = row;
    },
    confirm() {
      if (this.operateType === "edit") {
        this.$http.post("/api/user/edit", this.operateForm).then((res) => {
          console.log(res.data);
          this.dialogVisible = false;
          this.getList();
        });
      } else if (this.operateType === "add") {
        this.$http.post("/api/user/add", this.operateForm).then((res) => {
          console.log(res.data);
          this.dialogVisible = false;
          this.getList;
        });
      } else {
        console.log("参数错误");
      }
    },
    delUser(row) {
      this.$confirm("是否确定删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let id = row.id;
          this.$http
            .get("/api/user/del", {
              params: {
                id,
              },
            })
            .then((res) => {
              console.log(res.data);
              this.$message({
                type: "success",
                message: "删除成功!",
              });
              this.getList();
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
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
