import { log } from "../../log.js";
import { PropTypes } from "prop-types";

export default function CounterOutput({ value }) {
  log("<CounterOutput /> rendered", 2);

  const cssClass = value >= 0 ? "counter-output" : "counter-output negative";
  return <span className={cssClass}>{value}</span>;
}

CounterOutput.propTypes = {
  value: PropTypes.number,
};
