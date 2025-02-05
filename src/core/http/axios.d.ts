import "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    useMockApi?: boolean;
  }
}
