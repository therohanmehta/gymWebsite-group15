import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./AboutUs.module.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <div className={style.mainDiv}>
      <div className={style.Header}>
        <Header />
      </div>
      <div className={style.container}>
        <div className={style.video}>
          <iframe
            src="https://www.youtube.com/embed/f6t9TQqdUzg"
            frameborder="0"
            height="280"
            width="500"
            allowfullscreen="true"
            title="Gym video1"
          ></iframe>
        </div>
        <div className={style.txt}>
          <h1>About US</h1>
          <p>
            <b>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              nobis cum necessitatibus voluptatum laborum sequi explicabo
              quibusdam id quia similique perspiciatis asperiores dolore, velit
              dicta recusandae repellendus, iste porro a non architecto. Illum
              sapiente commodi iure nihil nemo reprehenderit neque?
            </b>
          </p>
        </div>
      </div>

      <div className={style.container2}>
        <div className={style.txt}>
          <h1>Why Choose us</h1>
          <p>
            <b>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur, rerum harum ex maiores incidunt dolorum modi iusto
              quas inventore eligendi commodi, deserunt ratione deleniti at
              nobis laborum totam cumque voluptatibus iste mollitia adipisci
              animi beatae ut illo. Consequuntur, assumenda quos.
            </b>
          </p>
        </div>
        <div className={style.video2}>
          <iframe
            src="https://www.youtube.com/embed/f6t9TQqdUzg"
            frameborder="0"
            height="280"
            width="500"
            allowfullscreen="true"
            title="Gym video2"
          ></iframe>
        </div>
        
      </div>
      <Link to={"/card"}  > <button className={style.End1} >See More</button></Link>
      <Footer/>
    </div>
  );
}

export default AboutUs;
