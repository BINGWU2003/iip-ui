import { App } from 'vue';

declare module 'iip-ui-vue3' {
  import { App } from 'vue';

  export interface IipUIComponent {
    name: string;
    install: (app: App) => void;
  }

  export interface LoadingOptions {
    target?: string | HTMLElement;
    body?: boolean;
    fullscreen?: boolean;
    lock?: boolean;
    text?: string;
    background?: string;
  }

  export interface LoadingInstance {
    close: () => void;
  }

  export interface SelectOptionItem {
    label: string;
    value: any;
    disabled?: boolean;
    [key: string]: any;
  }

  export interface FetchOptionsParams {
    keyword: string;
    page: number;
    pageSize: number;
  }

  export const IipButton: IipUIComponent;
  export const IipLoading: IipUIComponent & {
    service: (options: LoadingOptions) => LoadingInstance;
    directive: any;
  };
  export const IipSelect: IipUIComponent;

  const _default: {
    install: (app: App) => void;
  };

  export default _default;
} 