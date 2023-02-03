<script setup lang="ts">
const props = defineProps(['item'])

const cmp = props.item
</script>

<template>
  <div class="cmp-item">
    <i-mdi-radio />
    {{ cmp.title }}
  </div>
</template>

<style lang="less" scoped>
.cmp-item {
  flex-basis: 40%;
  padding: 5px;
  background-color: var(--el-fill-color-light);
  border: @border-solid;
  border-radius: 4px;
  cursor: move;

  &:hover {
    background-color: var(--el-fill-color);
  }
}
</style>
