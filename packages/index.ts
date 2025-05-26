import type { App } from 'vue';
import IipButton from './components/button';
import IipLoading from './components/loading';
import IipSelect from './components/select';

// 组件列表
const components = [
  IipButton,
  IipLoading,
  IipSelect
];

// 定义 install 方法
const install = (app: App): void => {
  // 注册所有组件
  components.forEach(component => {
    app.component(component.name as string, component);
  });
};

// 导出组件
export {
  IipButton,
  IipLoading,
  IipSelect,
  install
};

// 默认导出
export default {
  install
}; 