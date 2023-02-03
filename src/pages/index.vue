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
      border-bottom: @border-dash;
    }

    .el-main {
      border-right: @border-dash;
      border-left: @border-dash;
    }

    .el-aside {
      padding: 0 8px;
    }
  }
}
</style>
