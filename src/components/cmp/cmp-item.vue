<script setup lang="ts">
const props = defineProps(['item'])

const cmp = props.item
</script>

<template>
  <div class="cmp-item">
    <component :is="cmp.icon" />
    {{ cmp.title }}
  </div>
</template>

<style lang="less" scoped>

</style>
