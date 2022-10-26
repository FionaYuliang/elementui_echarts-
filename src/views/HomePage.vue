<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover" style="height: 290px">section 1</el-card>
      <el-card shadow="hover" style="height: 522px; margin-top: 20px"
        >section 2</el-card
      >
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card shadow="hover" v-for="item in 6" :key="item">
          <i class="icon"></i>
          <div class="detail">
            <p class="num">money</p>
            <p class="txt">description</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover" style="height: 280px"> </el-card>
      <div class="graph">
        <el-card shadow="hover" style="height: 260px"></el-card>
        <el-card shadow="hover" style="height: 260px"></el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  mounted() {
    this.$http.get("/home/getData").then((res) => {
      console.log(res.data);
    });
  },
};
</script>

<style lang="scss" scoped>
// @import "~@assets/scss/home.scss";
.home {
  .num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .el-card {
      width: 32%;
      margin-bottom: 20px;
    }
  }
  .graph {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .el-card {
      width: 48%;
    }
  }
}
</style>
