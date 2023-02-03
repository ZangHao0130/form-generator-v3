<script setup lang="ts">
const activePanel = ref('lib')
</script>

<template>
  <el-scrollbar>
    <el-tabs v-model="activePanel" stretch>
      <el-tab-pane label="组件库" name="lib">
        组件库
      </el-tab-pane>
      <el-tab-pane label="表单模板" name="form">
        表单模板
      </el-tab-pane>
    </el-tabs>
  </el-scrollbar>
</template>

<style lang="less" scoped>

</style>
