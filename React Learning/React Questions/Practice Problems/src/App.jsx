import "./App.css";
import { CartProvider } from "./CartContext.jsx";
import { ThemeProvider } from "./ThemeContext";

import { DayOne } from "./components/DayOne";
import { Eight } from "./components/Eight";
import { Eighteen } from "./components/Eighteen";
import EighteenComp from "./components/EighteenComp";
import { Eleven } from "./components/Eleven";
import { Fifteen } from "./components/Fifteen";
import { Five } from "./components/Five";
import { Four } from "./components/Four";
import { Fourteen } from "./components/Fourteen";
import { Nine } from "./components/Nine";
import { Ninteen } from "./components/Ninteen";
import { Seven } from "./components/Seven";
import { Seventeen } from "./components/Seventeen";
import { Six } from "./components/Six";
import { Sixteen } from "./components/Sixteen";
import { Ten } from "./components/Ten";
import { Thirteen } from "./components/Thirteen";
import { Three } from "./components/Three";
import { Twelve } from "./components/Twelve";
import { Twenty } from "./components/Twenty.jsx";
import { TwentyOne } from "./components/TwentyOne.jsx";
import { TwentyTwo } from "./components/TwentyTwo.jsx";
import { Two } from "./components/Two";

function App() {
  const items = ["item1", "item2", "item3", "item4", "item5"];

  return (
    <>
      {/* <DayOne /> */}
      {/* <Two /> */}
      {/* <Three /> */}
      {/* <Four /> */}
      {/* <Five /> */}
      {/* <Six /> */}
      {/* <Seven /> */}
      {/* <Eight /> */}
      {/* <Nine /> */}
      {/* <Ten /> */}
      {/* <Eleven /> */}
      {/* <Twelve/> */}
      {/* <Thirteen /> */}
      {/* <Fourteen items={items} /> */}
      {/* <Fifteen items={items} itemsPerPage={2} /> */}
      {/* <Sixteen /> */}
      {/* <Seventeen /> */}
      {/* <ThemeProvider>
        <div className="App">
          <Eighteen />
          <EighteenComp />
        </div>
      </ThemeProvider> */}

      {/* <CartProvider>
        <Ninteen />
      </CartProvider> */}

      {/* <Twenty /> */}
      {/* <TwentyOne /> */}
      <TwentyTwo />
    </>
  );
}

export default App;
