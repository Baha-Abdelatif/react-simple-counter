import React from "react";
import { PropTypes } from "prop-types";

export default function Footer({ repository }) {
  return (
    <footer>
      <p>
        Made with{" "}
        <a
          href='https://buymeacoffee.com/abdevweb'
          target='_blank'
          title='Click here to offer me a coffee.'
          className='footer-icon'
        >
          ☕
        </a>{" "}
        &{" "}
        <a
          href={"https://github.com/Baha-Abdelatif/" + repository}
          target='_blank'
          title='Click here to rate this project on Github.'
          className='footer-icon'
        >
          ❤️
        </a>{" "}
        by Abdelatif BAHA -{" "}
        <a
          href='https://abdevweb.com'
          target='_blank'
          title='Click here to see all my projects.'
        >
          AbDevWeb
        </a>{" "}
        <span id='footer_copyright_year'>{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}
Footer.propTypes = {
  repository: PropTypes.string,
};
