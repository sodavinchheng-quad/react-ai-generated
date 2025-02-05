import type {
  AxiosInstance,
  AxiosResponse,
  RawAxiosRequestConfig,
} from "axios";
import { createRequestFunction } from "./common";

/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
  url: string;
  options: RawAxiosRequestConfig;
  hasFile?: boolean;
}

/**
 *
 * @export
 * @enum {string}
 */
export enum RequestMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI<D = {}, R = {}> {
  protected route = "";
  protected method: RequestMethod = RequestMethod.GET;
  protected params: string[] = [];
  protected hasFile = false;

  constructor(protected axios: AxiosInstance) {}

  public async call(
    data: D,
    options?: RawAxiosRequestConfig,
  ): Promise<AxiosResponse<R, any>> {
    let route = this.route;
    const useMockApi = this.axios.defaults.useMockApi;

    if (this.params.length > 0) {
      for (const param of this.params) {
        const paramData = data[param as keyof D] as string;
        route = route.replace(`{${param}}`, paramData);
        delete data[param as keyof D];
      }
    }

    const axiosArgs: RequestArgs = {
      url: useMockApi
        ? "/mock" +
          (route.includes("?")
            ? route.split("?")[0] + ".json?" + route.split("?")[1]
            : route + ".json")
        : route,
      hasFile: this.hasFile,
      options: {
        ...options,
        method: useMockApi ? RequestMethod.GET : this.method,
        data,
      },
    };

    const request = createRequestFunction(axiosArgs);

    if (useMockApi) {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    return request<R>(this.axios);
  }
}
