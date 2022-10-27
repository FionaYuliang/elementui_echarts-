<template>
  <el-form :inline="inline" :model="form" ref="form" label-width="100px">
    <el-form-item
      v-for="item in formLabel"
      :key="item.model"
      :label="item.label"
    >
      <el-input
        v-model="input"
        :placeholder="'请输入' + item.label"
        v-if="!item.type"
      ></el-input>
      <el-select
        v-model="select"
        placeholder="请选择"
        v-if="item.type === 'select'"
      >
        <el-option
          v-for="item in item.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-switch v-model="value" v-if="item.type === 'switch'"></el-switch>
      <el-date-picker
        v-model="value"
        type="date"
        placeholder="选择日期"
        v-if="item.type === 'date'"
        value-format="yyyy-MM-dd"
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
