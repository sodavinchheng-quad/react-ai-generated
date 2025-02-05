import { call, put } from "typed-redux-saga";
import { Action, AsyncActionCreators } from "typescript-fsa";
import { BaseAPI } from "../core/api/base";
import { ApiResponse, CommonAsyncType } from "../core/types";

export function* makeAsyncApiCall<Payload, Response>(
  action: Action<CommonAsyncType & Payload>,
  asyncAction: AsyncActionCreators<Payload, Response, {}>,
  api: BaseAPI,
) {
  const { onComplete, onError, onSuccess, ...body } = action.payload;
  const { response, error }: ApiResponse<Response> = yield call(() => {
    return api
      .call(body)
      .then((response) => ({ response }))
      .catch((error) => ({ error }));
  });

  onComplete?.();

  if (!response || error) return onError?.(error);

  yield* put(
    asyncAction.done({
      params: action.payload,
      result: response.data,
    }),
  );

  onSuccess?.(response.data);
}
