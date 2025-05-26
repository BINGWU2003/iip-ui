import DefaultTheme from 'vitepress/theme'
import IipUI from '../../../packages/index'
import Demo from '../components/Demo.vue'

// 导入组件示例
import ButtonBasic from '../../components/demos/ButtonBasic.vue'

// 导入自定义样式
import './styles/index.css'
// 导入 Element Plus 样式
import 'element-plus/dist/index.css'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册IIP-UI组件库
    app.use(IipUI)

    // 注册演示组件容器
    app.component('Demo', Demo)

    // 注册所有示例组件
    app.component('ButtonBasic', ButtonBasic)
  }
} 