import { ApiRoutes } from "../../../../constants/api";
import { BaseAPI, RequestMethod } from "../../base";
import { ExampleRequestBody, ExampleResponse } from "./types";

export class ExampleAPI extends BaseAPI<ExampleRequestBody, ExampleResponse> {
  protected route = ApiRoutes.example;
  protected method = RequestMethod.POST;
}
