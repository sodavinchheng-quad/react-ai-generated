import axios, {
  AxiosResponse,
  HttpStatusCode,
  InternalAxiosRequestConfig,
} from "axios";
import { AppConfig } from "../../AppConfig";
import { RequestArgs } from "../api/base";
import { ExampleAPI } from "../api/requests";
import { LocalStorageManager } from "../storage/LocalStorageManager";
import { APIError } from "../types";

// const USE_MOCK_API = process.env.REACT_APP_USE_MOCK_API === "true";
const USE_MOCK_API = true;
const API_BASE_URL = process.env.REACT_APP_API_BASE ?? "";

export const axiosInstance = axios.create({
  baseURL: USE_MOCK_API ? "" : API_BASE_URL,
  withCredentials: true,
  useMockApi: USE_MOCK_API,
});

// リクエスト前の処理
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<RequestArgs>) => {
    const accessToken = LocalStorageManager.Instance.getObject<string>(
      AppConfig.Instance.LocalStorageKey["accessToken"],
    );

    config.headers["Authorization"] = accessToken
      ? `Bearer ${accessToken}`
      : "";
    config.headers["Content-Type"] = config.data?.hasFile
      ? "multipart/form-data"
      : "application/json";

    if (config.data && Object.hasOwnProperty.call(config.data, "hasFile")) {
      config.data = {
        ...config.data,
        hasFile: undefined,
      };
    }

    return config;
  },
);

export const requestSuccess = (config: AxiosResponse<any, any>) => {
  return { ...config, response: { data: config.data } };
};

export const requestFailure = (error: APIError, store: any) => {
  return Promise.reject({
    ...error,
    status: error.response?.status ?? HttpStatusCode.InternalServerError,
  });
};

const exampleApi = new ExampleAPI(axiosInstance);

export { exampleApi };
