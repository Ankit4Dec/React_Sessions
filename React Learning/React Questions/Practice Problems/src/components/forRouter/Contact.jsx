import { useEffect } from "react";

export const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);
  return (
    <>
      <div>Contact Page</div>
    </>
  );
};
