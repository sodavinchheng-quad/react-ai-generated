import { applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all, fork, put } from "typed-redux-saga";
import { exampleActions, ExampleReducer, exampleSaga } from "./example";

const sagaMiddleware = createSagaMiddleware({});
export function runSaga() {
  sagaMiddleware.run(function* () {
    yield all([fork(exampleSaga)]);
  });
}
export const middlewares = applyMiddleware(sagaMiddleware);

export const reducers = combineReducers({
  example: ExampleReducer,
});

export function* resetToInitialState() {
  yield* put(exampleActions.resetToInitialState());
}
