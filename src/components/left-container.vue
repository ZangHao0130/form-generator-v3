<script setup lang="ts">
const activePanel = ref('lib')
</script>

<template>
  <el-scrollbar class="left-container">
    <el-tabs v-model="activePanel" stretch>
      <el-tab-pane label="组件库" name="lib">
        <lib-container />
      </el-tab-pane>
      <el-tab-pane label="表单模板" name="form">
        表单模板
      </el-tab-pane>
    </el-tabs>
  </el-scrollbar>
</template>

<style lang="less" scoped>
.left-container {

  :deep(.el-tabs) {
    .el-tabs__header {
      margin: 0;
    }
  }

}
</style>
