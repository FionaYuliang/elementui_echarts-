<template>
  <el-form :inline="inline" :model="form" ref="form" class="demo-form-inline">
    <el-form-item
      v-for="item in formLabel"
      :key="item.model"
      :label="item.label"
    >
      <el-input
        v-model="input"
        placeholder="请输入内容"
        v-if="item.model === 'input'"
      ></el-input>
      <el-select
        v-model="select"
        placeholder="请选择"
        v-if="item.model === 'select'"
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
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949"
        v-if="item.model === 'switch'"
      >
      </el-switch>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期"
        value-format="yyyy-MM-dd"
        v-if="item.model === 'date'"
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
