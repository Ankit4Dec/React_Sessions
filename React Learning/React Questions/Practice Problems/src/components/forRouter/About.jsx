import { useEffect } from "react";

export const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <>
      <div>About Page</div>
    </>
  );
};
