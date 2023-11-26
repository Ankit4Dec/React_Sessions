import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Error from "../pages/Error";
import routes from "./routes.json"

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.PRODUCTS} element={<Products />} />
      <Route path={routes.ABOUT} element={<About />} />
      <Route path={routes.CONTACT_US} element={<ContactUs />} />
      <Route path={"*"} element={<Error />} />
    </Routes>
  );
};

export default PageRoutes;
