<script setup lang="ts">
const logo = () => {
  return new URL('@/assets/img/logo.png', import.meta.url).href
}
</script>

<template>
  <div class="header-container">
    <el-image :src="logo()" fit="contain" />
  </div>
</template>

<style lang="less" scoped>
.header-container {
  .el-image {
    width: 200px;
    height: 44px;
    margin-left: -10px;
  }
}
</style>
