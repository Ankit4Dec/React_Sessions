import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Error from "../pages/Error";
import routes from "./routes.json";
import Product from "../pages/Product";
import ProductSuggestion from "../pages/ProductSuggestion";
import MasterLayout from "../Layouts/MasterLayout";
import ProductLayout from "../Layouts/ProductLayout";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<MasterLayout />}>
        {/* <Route path={routes.HOME} element={<MasterLayout />}>  IT SHOULD BE USED BUT DON'T KNOW WHY IT'S NOT WORKING ANYMORE, WE'LL CHECK LATER*/}
        <Route index element={<Home />} />
        <Route path={routes.PRODUCTS} element={<ProductLayout />}>
          <Route index element={<Products />} />
          <Route path={routes.SUGGESTION} element={<ProductSuggestion />} />
          <Route path=":pid" element={<Product />} />
        </Route>

        <Route path={routes.ABOUT} element={<About />} />
        <Route path={routes.CONTACT_US} element={<ContactUs />} />
      </Route>

      <Route path={"*"} element={<Error />} />
    </Routes>
  );
};

export default PageRoutes;
