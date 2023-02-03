<script setup lang="ts">
/** 撤销 */
const undo = () => {

}

/** 还原 */
const redo = () => {

}

/** 清空设计区域 */
const clearCanvas = () => {

}

/** 预览设计结果 */
const preview = () => {

}

/** 导入JSON文件 */
const importJson = () => {

}

/** 导出JSON文件 */
const exportJson = () => {

}

/** 导出代码 */
const exportCode = () => {

}

/** 生成SFC文件 */
const exportSfc = () => {

}

interface ButtonOptions {
  name: string
  icon: string
  handler: () => void
  pos?: 'left' | 'right'
}

const availableButtons: ButtonOptions[] = [
  {
    name: '撤销',
    icon: '',
    handler: undo,
    pos: 'left',
  },
  {
    name: '还原',
    icon: '',
    handler: redo,
    pos: 'left',
  },
  {
    name: '清空',
    icon: '',
    handler: clearCanvas,
  },
  {
    name: '预览',
    icon: '',
    handler: preview,
  },
  {
    name: '导入JSON',
    icon: '',
    handler: importJson,
  },
  {
    name: '导出JSON',
    icon: '',
    handler: exportJson,
  },
  {
    name: '导出代码',
    icon: '',
    handler: exportCode,
  },
  {
    name: '生成SFC组件',
    icon: '',
    handler: exportSfc,
  },
]

const leftButtonList = computed(() => availableButtons.filter(button => button.pos === 'left'))
const rightButtonList = computed(() => availableButtons.filter(button => button.pos !== 'left'))
</script>

<template>
  <div class="center-header-button">
    <div class="left">
      <el-button-group>
        <el-button v-for="(button, index) in leftButtonList" :key="index" text type="primary" @click="button.handler">
          {{ button.name }}
        </el-button>
      </el-button-group>
    </div>
    <div class="right">
      <el-button-group>
        <el-button v-for="(button, index) in rightButtonList" :key="index" text type="primary" @click="button.handler">
          {{ button.name }}
        </el-button>
      </el-button-group>
    </div>
  </div>
</template>

<style lang="less" scoped>
.center-header-button {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
</style>
