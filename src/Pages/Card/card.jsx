import React from "react";
import "./card.css";
import image1 from "../../Image/Trainers50.png";
import image2 from "../../Image/Members.png";
import image3 from "../../Image/history.png";
import image6 from "../../Image/mission.png";

export default function Card(){
    return(
        <>
        <div className="about-container">
        <div className="div-1">
          <img
            src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image-1"
          />
          <p>
            Regular physical activity is one of the most important things you
            can do for your health. Being physically active can improve your
            brain health, help manage weight, reduce the risk of disease,
            strengthen bones and muscles, and improve your ability to do
            everyday activities. Adults who sit less and do any amount of
            moderate-to-vigorous physical activity gain some health benefits.
            Only a few lifestyle choices have as large an impact on your health
            as physical activity. Everyone can experience the health benefits of
            physical activity – age, abilities, ethnicity, shape, or size do not
            matter.
          </p>
        </div>
        <div className="div-2">
          <div className="big-box">
            <div className="box box-1">
              <img className=" img img-1" src={image1} />
            </div>
            <div className="box box-2">
              <img className="img img-2" src={image2} alt="image2" />
            </div> 
          </div>
          <div className="big-box">
            <div className="box box-3">
              <img className="img img-3" src={image3} />
            </div>
            <div className="box box-4">
              <img className="img img-4" src="https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image4" />
            </div>
          </div>
          <div className="big-box">
            <div className="box box-5">
              <img className="img img-5" src="https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg" alt="image5" />
            </div>
            <div className="box box-6">
              <img className="img img-6" src={image6} alt="image6" />
            </div>
          </div>
        </div>
      </div>
        </>
    )
}