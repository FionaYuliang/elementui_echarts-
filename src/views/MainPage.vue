<template>
  <el-container>
    <el-aside width="auto"><CommonAside></CommonAside></el-aside>
    <el-container>
      <el-header><CommonHeader></CommonHeader></el-header>
      <el-main></el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";
import CommonAside from "@/components/CommonAside.vue";

export default { components: { CommonHeader, CommonAside } };
</script>

<style lang="scss" scoped></style>
