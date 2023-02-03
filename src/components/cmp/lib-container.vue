<script setup lang="ts">
import { componentOptions } from '@/model'
const options = componentOptions
const activeNames = ref([])
</script>

<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item
      v-for="item in options"
      :key="item.name"
      :title="item.title"
      :name="item.name"
    >
      <template v-if="item.children">
        <cmp-item v-for="cmp in item.children" :key="cmp.name" :item="cmp" />
      </template>
    </el-collapse-item>
  </el-collapse>
</template>

<style lang="less" scoped>

</style>
