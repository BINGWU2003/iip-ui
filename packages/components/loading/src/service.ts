import { createVNode, render, isVNode, VNode, AppContext, ComponentInternalInstance, ref } from 'vue';
import LoadingVue from './loading.vue';

export interface LoadingOptions {
  target?: string | HTMLElement;
  text?: string;
  background?: string;
  fullscreen?: boolean;
  customClass?: string;
  visible?: boolean;
}

export interface LoadingInstance {
  close: () => void;
}

const instances: Record<string, LoadingInstance> = {};
let fullscreenInstance: LoadingInstance | undefined;

const Loading = function (options: LoadingOptions = {}): LoadingInstance {
  const id = options.target || 'fullscreen';

  if (options.fullscreen && fullscreenInstance) {
    return fullscreenInstance;
  }

  const container = document.createElement('div');
  const opts = {
    ...options,
    visible: true,
    target: options.target || document.body
  };

  if (typeof opts.target === 'string') {
    opts.target = document.querySelector(opts.target) as HTMLElement || document.body;
  }

  opts.target.appendChild(container);

  // 创建 VNode
  const loadingVNode = createVNode(LoadingVue, opts);
  render(loadingVNode, container);

  // 创建 close 方法
  const instance: LoadingInstance = {
    close: () => {
      if (loadingVNode.component) {
        loadingVNode.component.props.visible = false;
      }
      
      setTimeout(() => {
        opts.target.removeChild(container);
        render(null, container);
        if (options.fullscreen) {
          fullscreenInstance = undefined;
        }
        delete instances[id];
      }, 300);
    },
  };

  if (options.fullscreen) {
    fullscreenInstance = instance;
  }
  instances[id] = instance;

  return instance;
};

// 服务类型方法
Loading.service = Loading;

export default Loading; 