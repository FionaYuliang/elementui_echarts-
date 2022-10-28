<template>
  <header>
    <div class="left-content">
      <el-button
        @click="clickCollapse"
        type="primary"
        size="mini"
        icon="el-icon-menu"
      ></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="currentMenuItem.path" v-if="currentMenuItem">
          {{ currentMenuItem.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="right-content">
      <el-dropdown trigger="click" size="mini">
        <span class="el-dropdown-link">
          <img :src="userAvatar" class="user-avatar"
        /></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      userAvatar: require("../assets/images/user.png"),
    };
  },
  computed: {
    ...mapState({
      //router分模块后，用箭头函数引用
      currentMenuItem: (state) => state.tag.currentMenu,
    }),
  },
  methods: {
    clickCollapse() {
      this.$store.commit("clickCollapse");
    },
    logout() {
      this.$store.commit("clearToken");
      this.$store.commit("clearMenu");
      location.reload;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.left-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.right-content {
  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50px;
  }
}
</style>

<style lang="scss">
.el-breadcrumb__item {
  .el-breadcrumb__inner {
    color: #ffffff;
    font-weight: normal;
  }
  &:last-child {
    .el-breadcrumb__inner {
      color: #f4f4f4;
    }
  }
}
</style>
