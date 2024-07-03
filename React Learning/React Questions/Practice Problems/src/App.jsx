import "./App.css";
import { DayOne } from "./components/DayOne";
import { Eight } from "./components/Eight";
import { Eleven } from "./components/Eleven";
import { Fifteen } from "./components/Fifteen";
import { Five } from "./components/Five";
import { Four } from "./components/Four";
import { Fourteen } from "./components/Fourteen";
import { Nine } from "./components/Nine";
import { Seven } from "./components/Seven";
import { Six } from "./components/Six";
import { Ten } from "./components/Ten";
import { Thirteen } from "./components/Thirteen";
import { Three } from "./components/Three";
import { Twelve } from "./components/Twelve";
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
      <Fifteen items={items} itemsPerPage={2} />
    </>
  );
}

export default App;
