import type { Directive, DirectiveBinding, ObjectDirective, App } from 'vue';
import Loading, { LoadingOptions, LoadingInstance } from './service';

const INSTANCE_KEY = Symbol('IipLoading');

interface ElementWithLoading extends HTMLElement {
  [INSTANCE_KEY]?: LoadingInstance;
}

// 自定义指令
const vLoading: ObjectDirective<ElementWithLoading, boolean | LoadingOptions> = {
  mounted(el, binding) {
    const { value } = binding;
    
    if (value) {
      const options: LoadingOptions = {
        target: el,
        fullscreen: false,
        visible: true,
        ...(typeof value === 'object' ? value : {})
      };
      
      const instance = Loading(options);
      el[INSTANCE_KEY] = instance;
    }
  },
  
  updated(el, binding) {
    const { value, oldValue } = binding;
    
    if (value !== oldValue) {
      if (value) {
        const options: LoadingOptions = {
          target: el,
          fullscreen: false,
          visible: true,
          ...(typeof value === 'object' ? value : {})
        };
        
        const instance = Loading(options);
        el[INSTANCE_KEY] = instance;
      } else {
        el[INSTANCE_KEY]?.close();
      }
    }
  },
  
  unmounted(el) {
    el[INSTANCE_KEY]?.close();
  }
};

// 创建 directive 方法
const LoadingDirective = {
  install(app: App) {
    app.directive('loading', vLoading);
  }
};

export default LoadingDirective;
export { vLoading }; 