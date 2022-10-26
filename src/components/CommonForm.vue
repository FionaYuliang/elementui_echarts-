<template>
  <el-form :inline="true" :model="form" ref="form" class="demo-form-inline">
    <el-form-item
      v-for="item in formLabel"
      :key="item.model"
      :label="item.label"
    >
      <el-input
        v-model="form[item.model]"
        placeholder="请输入内容"
        v-if="item.type === 'input'"
      ></el-input>
      <el-select
        v-model="form[item.model]"
        placeholder="请选择"
        v-if="item.type === 'select'"
      >
        <el-option
          v-for="item in item.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-switch
        v-model="form[item.model]"
        active-color="#13ce66"
        inactive-color="#ff4949"
        v-if="item.type === 'switch'"
      >
      </el-switch>
      <el-date-picker
        v-model="form[item.model]"
        type="date"
        placeholder="选择日期"
        value-format="yyyy-MM-dd"
        v-if="item.type === 'date'"
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item><slot></slot></el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    inline: Boolean,
    form: Object,
    formLabel: Array,
  },
};
</script>

<style lang="scss" scoped></style>
