import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <small>
        Website coded by{" "}
        <a
          href="https://chelsea-koenig.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Chelsea Koenig
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/emceekoenig/dictionary-react"
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
