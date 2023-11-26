import { Link } from "react-router-dom";
import routes from "./../routes/routes.json";

const Error = () => {
  return (
    <>
      <h1>Error: 404 Page not found</h1>
      <h4>
        Please click the link <Link to={routes.HOME}>Home</Link> to redirect the
        home page.
      </h4>
    </>
  );
};

export default Error;
