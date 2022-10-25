<template>
  <el-container>
    <el-aside width="auto"><CommonAside></CommonAside></el-aside>
    <el-container>
      <el-header><CommonHeader></CommonHeader></el-header>
      <CommonTag></CommonTag>
      <el-main>
        <router-view> </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";
import CommonAside from "@/components/CommonAside.vue";
import CommonTag from "@/components/CommonTag.vue";

export default { components: { CommonHeader, CommonAside, CommonTag } };
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #333;
}
</style>
