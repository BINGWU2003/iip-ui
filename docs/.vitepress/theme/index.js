import DefaultTheme from 'vitepress/theme'
import IipUI from '../../../packages/index'
import Demo from '../components/Demo.vue'

// 导入组件示例
import ButtonBasic from '../../components/demos/ButtonBasic.vue'
import SelectBasic from '../../components/demos/SelectBasic.vue'
import SelectRemote from '../../components/demos/SelectRemote.vue'
import LoadingBasic from '../../components/demos/LoadingBasic.vue'
import LoadingService from '../../components/demos/LoadingService.vue'

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
    app.component('SelectBasic', SelectBasic)
    app.component('SelectRemote', SelectRemote)
    app.component('LoadingBasic', LoadingBasic)
    app.component('LoadingService', LoadingService)
  }
} 