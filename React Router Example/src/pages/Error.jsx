import { Link, useNavigate } from "react-router-dom";
import routes from "./../routes/routes.json";
import { useEffect, useState } from "react";

const Error = () => {
  const [timer, setTimer] = useState(5);

  const navigate = useNavigate()

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer((preState) => preState - 1);
      }, 1000);
    }
    if(timer === 0){
      navigate(routes.HOME);
    }
  }, [timer, navigate]);

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     navigate(routes.HOME);
  //   }, 5000)
  // }, [navigate])

  return (
    <>
      <h1>Error: 404 Page not found</h1>
      <h4>
        Please click the link <Link to={routes.HOME}>Home</Link> to redirect the
        home page.
      </h4>
      <p>Your will redirect to Home page in {timer} Second</p>
    </>
  );
};

export default Error;
