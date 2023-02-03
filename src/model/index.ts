const baseCmpList = [
  {
    name: 'input',
    title: '输入框',
    icon: '',
  },
  {
    name: 'input-number',
    title: '数字输入框',
    icon: '',
  },
  {
    name: 'radio',
    title: '单选框',
    icon: '',
  },
  {
    name: 'select',
    title: '下拉选择',
    icon: '',
  },
  {
    name: 'slider',
    title: '滑块',
    icon: '',
  },
  {
    name: 'switch',
    title: '开关',
    icon: '',
  },
  {
    name: 'time',
    title: '时间选择',
    icon: '',
  },
]

export const componentOptions = [
  {
    name: 'layout',
    title: '布局组件',
    children: [],
  },
  {
    name: 'base',
    title: '基础组件',
    children: [...baseCmpList],
  },
  {
    name: 'advance',
    title: '高级组件',
  },
]
