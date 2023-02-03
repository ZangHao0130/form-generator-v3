<script setup lang="ts">

</script>

<template>
  <div class="center-container">
    <el-header height="40px">
      <center-header />
    </el-header>
    <el-main height="100%">
      <center-area />
    </el-main>
  </div>
</template>

<style lang="less" scoped>
.center-container {
  height: 100%;
  .el-main {
    border: 0 !important;
    background-color: @bg-normal;
  }
}
</style>
