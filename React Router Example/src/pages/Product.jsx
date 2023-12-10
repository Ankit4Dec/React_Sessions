import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const Product = () => {
  const { pid } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isNaN(pid) || +pid >= 10) {
      navigate("/error");
    }
  }, [pid, navigate]);

  return (
    <>
      <h3>Product Page</h3>
      <h5>Product id - {pid}</h5>
      <h5>Product path - {pathname}</h5>
    </>
  );
};

export default Product;
