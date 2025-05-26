export interface SelectOptionItem {
  [key: string]: any;
  disabled?: boolean;
  description?: string;
}

export interface FetchOptionsParams {
  keyword: string;
  page: number;
  pageSize: number;
  [key: string]: any;
}

export type FetchOptionsFunction = (params: FetchOptionsParams) => Promise<any>; 