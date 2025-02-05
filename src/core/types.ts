import { AxiosError, HttpStatusCode } from "axios";

export interface CommonAsyncType<T = any> {
  onError?: (error?: APIError) => void;
  onSuccess?: (result: T) => void;
  onComplete?: () => void;
}

export type DataObj<T> = {
  data: T;
};

export type ApiResponse<T> = {
  response?: DataObj<T>;
  error?: APIError;
};

export type APIError = AxiosError<{
  "error-code": string;
  "error-id": string;
  details: {};
}> & {
  status: HttpStatusCode;
};
