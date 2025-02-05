import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { exampleActions, exampleSelectors } from "../../../ducks/example";
import { AppDispatch } from "../../../store";

export const useExample = () => {
  const dispatch = useDispatch<AppDispatch>();
  const exampleText = useSelector(exampleSelectors.exampleText);

  useEffect(() => {
    exampleApiCall();
  }, []);

  const exampleApiCall = useCallback(() => {
    dispatch(
      exampleActions.exampleApiCall.started({
        text: "Hello World",
      }),
    );
  }, []);

  return {
    exampleText,
  };
};
