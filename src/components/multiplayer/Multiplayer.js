import React from "react";
import "./Multiplayer.css";
import rockImage from "../rockImage/rock.png";
import paperImage from "../paperImage/paper.png";
import scissorImage from "../scissorImage/scissor.png";

const Multiplplayer = () => {
  return (
    <section id="multiplayer">
      <div className="container">
        <h1>multiplayer Game</h1>
        <div className="multiplayer_home">
          <div className="multi_container">
            <div className="result_field">
              <div className="score_result">
                <div>
                  User Score
                  <span className="user_score"></span>
                </div>

                <div>
                  <span className="cpu_score"> </span>
                  CPU
                </div>
              </div>
              <div className="result_images">
                <span className="user_result">
                  <image src={rockImage} alt="" />
                </span>
                <span className="cpu_result">
                  <image src={rockImage} alt="" />
                </span>
              </div>
              <div className="result">Let's play</div>
            </div>
            <div className="option_images">
              <span className="option_image">
                <img src={rockImage} alt="" />
                <p>Rock</p>
              </span>

              <span className="option_image">
                <img src={paperImage} alt="" />
                <p>Paper</p>
              </span>

              <span className="option_image">
                <img src={scissorImage} alt="" />
                <p>Scissors</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Multiplplayer;
