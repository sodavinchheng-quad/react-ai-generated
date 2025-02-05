import { exampleApi } from "../../core/http/httpClient";
import { makeAsyncApiCall } from "../common";
import { takeEveryFsa } from "../operations";
import { exampleActions } from "./actions";

export function* exampleSaga() {
  yield takeEveryFsa(exampleActions.exampleApiCall.started, function* (action) {
    yield* makeAsyncApiCall(action, exampleActions.exampleApiCall, exampleApi);
  });
}
