import { App } from 'vue';
import Button from './src/button.vue';

// 定义 install 方法
Button.install = (app: App): void => {
  app.component(Button.name || 'IipButton', Button);
};

export default Button; 