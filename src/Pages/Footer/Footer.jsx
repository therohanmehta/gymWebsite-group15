import React from "react";
import style from "./footer.module.css";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <h3>GYM</h3>
          <p>
            Loreum ipsum dolor sitt feugiant <br /> various nue oliquet
          </p>
          <div className="footer__socials">
            <Link to="https://www.facebook.com/" target="_blank">
              <FaFacebookF />
            </Link>
            <Link to="https://www.twitter.com/" target="_blank">
              <AiOutlineTwitter />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank">
              <AiFillInstagram />
            </Link>
          </div>
        </article>
        <article>
          <Link to="/Healthy living">Healthy living</Link>
          <Link to="/Loreum">Loreum</Link>
          <Link to="/Loreum ipsum">Loreum ipsum</Link>
          <Link to="/Loreum">Loreum</Link>
          <Link to="/Loreum ipsum">Loreum ipsum</Link>
        </article>
        <article>
          <Link to="/services">services</Link>
          <Link to="/Loreum">Loreum</Link>
          <Link to="/Loreum ipsum">Loreum ipsum</Link>
          <Link to="/Loreum ipsum">Loreum ipsum</Link>
          <Link to="/Loreum ipsum">Loreum ipsum</Link>
        </article>
        <article>
          <Link to="/programms">Programms</Link>
          <Link to="/Loreum">Loreum</Link>
          <Link to="/Loreum ipsum">Loreum</Link>
          <Link to="/Loreum ipsum">Loreum</Link>
          <Link to="/Loreum ipsum">Loreum</Link>
        </article>
      </div>
      <div className="footer_copyright">
        <p>@{new Date().getFullYear()} All rights copy reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
