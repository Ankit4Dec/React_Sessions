import { Route, Routes } from "react-router-dom";
import MasterLayout from "../layouts/MasterLayout";
import UserForm from "../components/UserForm/UserForm";
import routes from "./routes.json";
import Profiles from "../components/Profiles/Profiles";
import ErrorPage from "../pages/ErrorPage";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<MasterLayout />}>
        <Route index element={<Profiles />} />
        <Route path={routes.PROFILES}>
          <Route index element={<Profiles />} />
          <Route path={":pid"} element={<Profiles />} />
        </Route>
        <Route path={routes.ADD_USER} element={<UserForm />} />
      </Route>
      <Route path={"*"} element={<ErrorPage />} />
    </Routes>
  );
};

export default PageRoutes;
