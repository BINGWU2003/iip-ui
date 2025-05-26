import type { Directive, DirectiveBinding, ObjectDirective, App } from 'vue';
import Loading, { LoadingOptions, LoadingInstance } from './service';

const INSTANCE_KEY = Symbol('IipLoading');

interface ElementWithLoading extends HTMLElement {
  [INSTANCE_KEY]?: LoadingInstance;
}

// 获取指令的修饰符和参数
const getOptions = (
  el: ElementWithLoading,
  binding: DirectiveBinding<boolean | LoadingOptions>
): LoadingOptions => {
  const modifiers = binding.modifiers || {};
  const textExpr = el.getAttribute('element-loading-text');
  const backgroundExpr = el.getAttribute('element-loading-background');
  const customClassExpr = el.getAttribute('element-loading-custom-class');

  // 构建选项
  const options: LoadingOptions = {
    target: el,
    fullscreen: modifiers.fullscreen,
    text: textExpr || '',
    background: backgroundExpr || undefined,
    customClass: customClassExpr || undefined,
    visible: true
  };

  // 如果绑定值是对象，合并其中的选项
  if (typeof binding.value === 'object') {
    Object.assign(options, binding.value);
  }

  // 确保非全屏模式下目标元素有相对定位
  if (!options.fullscreen && el) {
    const position = window.getComputedStyle(el).position;
    if (position === 'static') {
      el.style.position = 'relative';
    }
  }

  return options;
};

// 自定义指令
const vLoading: ObjectDirective<ElementWithLoading, boolean | LoadingOptions> = {
  mounted(el, binding) {
    if (binding.value) {
      const options = getOptions(el, binding);
      const instance = Loading(options);
      el[INSTANCE_KEY] = instance;
    }
  },
  
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      if (binding.value) {
        const options = getOptions(el, binding);
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