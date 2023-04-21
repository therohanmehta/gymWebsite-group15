import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./AboutUs.module.css";
// import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
        <Header />
    <div className={style.mainDiv}>
      <div className={style.Header}>
      
      </div>
      <div className={style.container}>
        <div className={style.video}>
          <iframe
            src="https://www.youtube.com/embed/j528loCi-lI"
            frameborder="0"
            // height="280"
            // width="500"
            allowFullScreen="true"
            title="Gym video1"
          ></iframe>
        </div>
        <div className={style.txt}>
          <br />
          <h1>About US</h1>
          <p>
            <b>
            Anytime Fitness is a franchise of 24-hour health and fitness clubs that is headquartered in Woodbury, Minnesota, United States. The company operates over 5,000 franchised locations in 50 countries. The gym facilities are open 24 hours a day, 365 days of the year.
            </b>
          </p>
        </div>
      </div>

      <div className={style.container2}>
        <div className={style.txt}>
          <h1>Why Choose us</h1>
          <p>
            <b>

            <br />
Better equipment: <br /><br />

Expert trainers: <br /><br />

Special amenities: <br /><br />

Community atmosphere: <br /><br />
            </b>
          </p>
        </div>
        <div className={style.video2}>
          <iframe
            src="https://www.youtube.com/embed/tUykoP30Gb0"
            frameborder="0"
            // height="280"
            // width="500"
            allowFullScreen="true"
            title="Gym video2"
          ></iframe>
        </div>
      </div>
      {/* <Link to={"/card"}>
        <button>See More</button>
      </Link> */}
      <div className={style.Footer}>
        <Footer />
      </div>
    </div>
    </>
  );
}

export default AboutUs;
