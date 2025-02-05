import { takeEvery, takeLatest, type ForkEffect } from "redux-saga/effects";
import { call } from "typed-redux-saga";
import {
  isType,
  type Action,
  type ActionCreator,
  type AnyAction,
} from "typescript-fsa";

function* handleCommonFsaAction<T>(
  action: AnyAction,
  ac: ActionCreator<T>,
  fn: (a: Action<T>) => any,
) {
  if (isType(action, ac)) {
    yield* call(fn, action);
  }
}

export function takeEveryFsa<T>(
  ac: ActionCreator<T>,
  fn: (a: Action<T>) => any,
): ForkEffect {
  return takeEvery(ac.type, function* (action: AnyAction) {
    yield handleCommonFsaAction(action, ac, fn);
  });
}

export function takeLatestFsa<T>(
  ac: ActionCreator<T>,
  fn: (a: Action<T>) => any,
): ForkEffect {
  return takeLatest(ac.type, function* (action: AnyAction) {
    yield handleCommonFsaAction(action, ac, fn);
  });
}
