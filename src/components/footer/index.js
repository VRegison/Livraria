import React from "react";
import "./style.css";
export function Footer() {
  return (
    <footer>
      <div className="informações">
      <span className="icons" >
      <i class="fa-solid fa-user fa-lg"></i>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/vitor-regison-01a5201ba/"
          >
            Vitor regison
          </a>
        </span>
        <span className="icons" >
          <i class="fa-brands fa-linkedin fa-lg"></i>  :
          <a
            target="_blank"
            href="https://www.linkedin.com/in/vitor-regison-01a5201ba/"
          >
            Linkedin
          </a>
        </span>
        <span className="icons">
          <i class="fa-brands fa-github-square fa-lg"></i>
          <a target="_blank" href="https://github.com/VRegison/">
            Git Hub
          </a>
        </span>
      </div>
    </footer>
  );
}
