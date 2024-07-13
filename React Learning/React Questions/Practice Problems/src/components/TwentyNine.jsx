// Create a different Route Pages component using useEffect to update the document title with the visited page whenever it changes

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./forRouter/Home";
import { About } from "./forRouter/About";
import { Contact } from "./forRouter/Contact";

export const TwentyNine = () => {
  return (
    <BrowserRouter>
      <>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
};
