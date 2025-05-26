import { App } from 'vue';
import Select from './src/select.vue';

// 定义 install 方法
Select.install = (app: App): void => {
  app.component(Select.name || 'IipSelect', Select);
};

export default Select;
export * from './src/types'; 