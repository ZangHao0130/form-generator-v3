<script setup lang="ts">
const activePanel = ref('cmp-setting')
</script>

<template>
  <el-scrollbar>
    <el-tabs v-model="activePanel">
      <el-tab-pane label="组件设置" name="cmp-setting">
        组件设置
      </el-tab-pane>
      <el-tab-pane label="表单设置" name="form-setting">
        表单设置
      </el-tab-pane>
      <el-tab-pane label="数据源" name="form-source">
        数据源
      </el-tab-pane>
    </el-tabs>
  </el-scrollbar>
</template>

<style lang="less" scoped>

</style>
