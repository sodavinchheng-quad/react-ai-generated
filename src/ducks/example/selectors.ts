import { createSelector } from "@reduxjs/toolkit";
import { StoreState } from "../../store";

const selector = (state: StoreState) => state.example;

export const exampleSelectors = {
  exampleText: createSelector(selector, (state) => state.exampleText),
};
