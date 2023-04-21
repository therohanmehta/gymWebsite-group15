import React from "react";
import style from "./App.module.css";

import "./App.module.css";
import { Link } from "react-router-dom";

export default function Trainer() {
  return (
    <>
      <div className={style.mainWrapper}>
        <div className={style.wrapper}>
          <div className={style.headingDiv} style={{ textAlign: "center" }}>
            <h1 className={style.heading1}>Our Professional Trainner</h1>
          </div>
          <div className={style.container}>
            <div className={style.div1}>
              <img
                className={style.div2}
                alt="trainer"
                src="https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg"
              />
              <p className={style.div3}>Dickerson</p>
            </div>
            <div className={style.div1}>
              <img
                className={style.div2}
                alt="trainer"
                src="https://images.pexels.com/photos/4058411/pexels-photo-4058411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <p className={style.div3}>Mitchell </p>
            </div>
            <div className={style.div1}>
              <img
                className={style.div2}
                alt="trainer"
                src="https://images.pexels.com/photos/6296010/pexels-photo-6296010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <p className={style.div3}>Williamson</p>
            </div>
            <div className={style.div1}>
              <img
                className={style.div2}
                alt="trainer"
                src="https://images.pexels.com/photos/6922165/pexels-photo-6922165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <p className={style.div3}>Alexia</p>
            </div>
          </div>
          <br />

          <div className={style.submit}>
            <Link to={"/team"} className="link-tag">
              {" "}
              <button className={style.btn}>Meet Our Team</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
