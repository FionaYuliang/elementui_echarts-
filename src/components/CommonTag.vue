<template>
  <div class="tags">
    <el-tag
      :key="tag.name"
      v-for="tag in tags"
      :closable="tag.name !== 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="changeMenu(tag)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      dynamicTags: ["标签一", "标签二", "标签三"],
      inputVisible: false,
      inputValue: "",
    };
  },
  computed: {
    ...mapState({
      tags: (state) => state.tag.tagsList,
    }),
  },
  methods: {
    ...mapMutations({
      //相当于对store进行commit
      close: "closeTag",
    }),
    handleClose(tag) {
      this.close(tag);
    },
    changeMenu(tag) {
      this.$router.push({ name: tag.name });
      this.$store.commit("selectMenu", tag);
    },
  },
};
</script>

<style lang="scss" scoped>
.tags {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
