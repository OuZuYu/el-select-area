import {storiesOf} from '@storybook/vue'
import Basic from './basic.vue'

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

storiesOf('el-select-area', module).add('basic usage', () => ({
  template: `<Basic/>`,
  components: {Basic}
}))