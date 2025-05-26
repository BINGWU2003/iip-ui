import type { App } from 'vue';
import IipButton from './components/button';
import IipLoading from './components/loading';

// 组件列表
const components = [
  IipButton,
  IipLoading
];

// 定义 install 方法
const install = (app: App): void => {
  // 注册所有组件
  components.forEach(component => {
    app.component(component.name, component);
  });
};

// 导出组件
export {
  IipButton,
  IipLoading,
  install
};

// 默认导出
export default {
  install
}; 