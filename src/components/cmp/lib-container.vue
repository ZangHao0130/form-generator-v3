<script setup lang="ts">
import { componentOptions } from '@/model'
const options = componentOptions
const activeNames = ref(['base'])
</script>

<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item
      v-for="item in options"
      :key="item.name"
      :title="item.title"
      :name="item.name"
      class="cmp-wrapper"
    >
      <template v-if="item.children">
        <cmp-item v-for="cmp in item.children" :key="cmp.name" :item="cmp" />
      </template>
    </el-collapse-item>
  </el-collapse>
</template>

<style lang="less" scoped>
.cmp-wrapper {
  :deep(.el-collapse-item__content){
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>
