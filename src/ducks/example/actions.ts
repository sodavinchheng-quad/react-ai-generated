import actionCreatorFactory from "typescript-fsa";
import { ExampleRequestBody, ExampleResponse } from "../../core/api/requests/example/types";
import { CommonAsyncType } from "../../core/types";

const actionCreator = actionCreatorFactory("@@Example");

export const exampleActions = {
  exampleApiCall: actionCreator.async<CommonAsyncType<ExampleResponse> & ExampleRequestBody, ExampleResponse>("EXAMPLE_API_CALL"),
  resetToInitialState: actionCreator("RESET_TO_INITIAL_STATE"),
};
