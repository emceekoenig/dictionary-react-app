import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <small>
        Website coded by{" "}
        <a
          href="https://chelseakoenig.com/"
          target="_blank"
          rel="noreferrer"
        >
          Chelsea Koenig
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/emceekoenig/dictionary-react-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>
        .
      </small>
    </div>
  );
}
