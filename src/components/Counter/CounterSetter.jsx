import { useState } from "react";
import { PropTypes } from "prop-types";
import { log } from "../../log";

export default function CounterSetter({ handleSetCount }) {
  const [enteredNumber, setEnteredNumber] = useState(0);
  log("<CounterSetter /> is rendered", 1);

  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  function handleSetClick() {
    handleSetCount(enteredNumber);
    setEnteredNumber(0);
  }
  return (
    <section id='configure-counter'>
      <h2>Set Counter</h2>
      <input type='number' onChange={handleChange} value={enteredNumber} />
      <button onClick={handleSetClick}>Set</button>
    </section>
  );
}
CounterSetter.propTypes = {
  handleSetCount: PropTypes.func,
};
