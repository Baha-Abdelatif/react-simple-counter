import { memo } from "react";
import { PropTypes } from "prop-types";
import { log } from "../../log.js";

const IconButton = memo(function IconButton({ children, icon, ...props }) {
  log("<IconButton /> rendered", 2);

  const Icon = icon;
  return (
    <button {...props} className='button'>
      <Icon className='button-icon' />
      <span className='button-text'>{children}</span>
    </button>
  );
});
export default IconButton;

IconButton.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.func,
};
