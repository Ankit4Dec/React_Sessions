import { Route, Routes } from "react-router-dom";
import MasterLayout from "../layouts/MasterLayout";
import routes from "./routes.json";
import ErrorPage from "../pages/ErrorPage";
import UserProfiles from "../pages/UserProfiles";
import AddUser from "../pages/AddUser";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<MasterLayout />}>
        <Route index element={<UserProfiles />} />
        <Route path={routes.PROFILES}>
          <Route index element={<UserProfiles />} />
          <Route path={":pNo"} element={<UserProfiles />} />
        </Route>
        <Route path={routes.ADD_USER} element={<AddUser />} />
      </Route>
      <Route path={"*"} element={<ErrorPage />} />
    </Routes>
  );
};

export default PageRoutes;
