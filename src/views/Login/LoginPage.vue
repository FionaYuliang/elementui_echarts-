<template>
  <div style="padding: 50px">
    <el-form :model="form">
      <el-form-item label="用户名">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item aligin="center">
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$http.post("api/permission/getMenu", this.form).then((res) => {
        res = res.data;
        if (res.code === 20000) {
          this.$store.commit("clearMenu");
          this.$store.commit("selectMenu", res.data.menu);
          this.$store.commit("setToken", res.data.token);
          this.$store.commit("addMenu", this.$router);
          this.$router.push({ name: "home" });
        } else {
          this.$message.warning(res.data.message);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-form {
  width: 80%;
  margin: auto;
  padding: 45px;
  height: 450px;
  background-color: #fff;
}
</style>
