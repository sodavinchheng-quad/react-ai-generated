import { Route, Routes } from "react-router-dom";
import { ExamplePage } from "./components/pages/example";
import { PageRoutes } from "./constants/routes";

export const RouteConfig: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path={PageRoutes.EXAMPLE} element={<ExamplePage />} />
      </Routes>
    </>
  );
};
