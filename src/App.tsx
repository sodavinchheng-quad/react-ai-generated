import { useEffect } from "react";
import { Provider } from "react-redux";
import "./App.css";
import {
  axiosInstance,
  requestFailure,
  requestSuccess,
} from "./core/http/httpClient";
import { RouteConfig } from "./RouteConfig";
import { store } from "./store";

function App() {
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (config) => requestSuccess(config),
      (config) => requestFailure(config, store),
    );
  }, []);

  return (
    <Provider store={store}>
      <RouteConfig />
    </Provider>
  );
}

export default App;
