<script setup lang="ts">

</script>

<template>
  <div class="form-generator">
    <el-container direction="vertical">
      <el-header height="48px">
        <header-container />
      </el-header>
      <el-container direction="horizontal">
        <el-aside width="272px">
          <left-container />
        </el-aside>
        <el-main height="">
          <center-container />
        </el-main>
        <el-aside width="272px">
          <right-container />
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.form-generator {
  height: 100%;
  :deep(.el-container) {
    height: 100%;
    .el-header {
      border-bottom: 1px dashed var(--el-border-color);
    }

    .el-main {
      border-right: 1px dashed var(--el-border-color);
      border-left: 1px dashed var(--el-border-color);
    }

    .el-aside {
      padding: 0 8px;
    }
  }
}
</style>
