import { Action } from "@reduxjs/toolkit";
import { isType } from "typescript-fsa";
import { exampleActions } from "./actions";
import { ExampleState } from "./types";

const initialState: ExampleState = {
  exampleText: "",
};

export function ExampleReducer(
  state = initialState,
  action: Action,
): ExampleState {
  if (isType(action, exampleActions.exampleApiCall.done)) {
    return {
      ...state,
      exampleText: action.payload.result.text,
    };
  }

  if (isType(action, exampleActions.resetToInitialState)) {
    return initialState;
  }

  return state;
}
