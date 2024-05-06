import { useState } from "react";
import Header from "./components/Header.jsx";
import CounterSetter from "./components/Counter/CounterSetter.jsx";
import Counter from "./components/Counter/Counter.jsx";
import Footer from "./components/Footer.jsx";
import { log } from "./log.js";

function App() {
  const [chosenCount, setChosenCount] = useState(0);
  const handleSetCount = (newCount) => {
    setChosenCount(newCount);
  };
  log("<App /> rendered");

  return (
    <>
      <Header />
      <main>
        <CounterSetter handleSetCount={handleSetCount} />
        <Counter initialCount={chosenCount} />
      </main>
      <Footer repository={"react-simple-counter"} />
    </>
  );
}

export default App;
