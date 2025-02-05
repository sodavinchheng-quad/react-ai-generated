import type { AxiosInstance, AxiosResponse } from "axios";
import type { RequestArgs } from "./base";

/**
 *
 * @export
 */
export const createRequestFunction = function (axiosArgs: RequestArgs) {
  return <T = unknown, R = AxiosResponse<T>>(axios: AxiosInstance) => {
    const axiosRequestArgs = {
      ...axiosArgs.options,
      url: axiosArgs.url,
      data: {
        ...axiosArgs.options.data,
        hasFile: axiosArgs.hasFile,
      },
    };
    return axios.request<T, R>(axiosRequestArgs);
  };
};
