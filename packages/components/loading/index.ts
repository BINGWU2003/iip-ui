import { App } from 'vue';
import Loading from './src/loading.vue';
import LoadingService from './src/service';
import LoadingDirective, { vLoading } from './src/directive';

// 为组件设置名称
Loading.name = 'IipLoading';

// 整合 Loading 对象，包含组件、服务方法和指令
const IipLoading = {
  ...Loading,
  service: LoadingService,
  directive: vLoading,
  install: (app: App): void => {
    app.component(Loading.name, Loading);
    app.use(LoadingDirective);
    // 注册 $loading 方法，方便通过 this.$loading 使用
    app.config.globalProperties.$loading = LoadingService;
  }
};

export default IipLoading;

// 导出类型
export * from './src/service'; 