import { App, Plugin } from 'vue';
import { LoadingOptions, LoadingInstance } from '../components/loading/src/service';

export interface IipUIComponent extends Plugin {
  name: string;
}

export interface IipUIPlugin {
  install: (app: App) => void;
}

export interface IipLoadingService {
  service: (options: LoadingOptions) => LoadingInstance;
}

export interface IipLoadingDirective {
  directive: any;
}

export interface IipLoading extends IipUIComponent, IipLoadingService, IipLoadingDirective {}

declare module 'vue' {
  export interface GlobalComponents {
    IipButton: typeof import('../components/button')['default'];
    IipLoading: typeof import('../components/loading')['default'];
  }

  export interface ComponentCustomProperties {
    $loading: IipLoadingService['service'];
  }
}

declare const IipUI: IipUIPlugin;

export {
  IipButton,
  IipLoading
} from '../index';

export default IipUI; 